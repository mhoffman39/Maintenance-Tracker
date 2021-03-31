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
    axios.patch(`/tasks?ID=${id}`, {nextDue: date})
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
        {/* <AddTask /> */}
        <TaskList tasks={this.state.tasks} callback={this.updateTasks}/>
      </div>
    );
  }
}

export default App;
