import React from 'react';
import axios from 'axios';
import './App.css';
import AddTask from './AddTask'
import TaskList from './TaskList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    }
    this.getTasks = this.getTasks.bind(this);
    this.updateTasks = this.updateTasks.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    axios.get('/tasks')
    .then(response => {
      let tasks = response.data;
      this.setState({tasks: tasks})
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  updateTasks(id, date) {
    console.log('test')
    axios.patch(`/tasks?ID=${id}`, {nextDue: date})
    .then(this.getTasks())
    .catch(function(error) {
      console.log(error);
    })
  }


  addTask(task, periodicity) {
    const date = new Date();
    const a = date.getDate() + parseInt(periodicity)
    const epoch = date.setDate(a)
    const dueDate= new Date(epoch)

    axios.post('/tasks', {
      nextDue: dueDate,
      name: task,
      periodicity: periodicity,
    })
    .then(this.getTasks())
    .catch(function(error) {
      console.log(error);
    })
  }

  deleteTask(id) {
    axios.delete('/tasks', {data: {_id: id}})
    .then(this.getTasks())
    .catch(function(error) {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Home Maintenance</h1>
        <h3>made simple</h3>
        <div className="window">
          <AddTask className="add" callback={this.addTask}/>
          <div>
            <TaskList className="list" tasks={this.state.tasks} callback={this.updateTasks} deleteTask={this.deleteTask}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
