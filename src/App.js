import React from 'react';
import axios from 'axios';
import './App.css';
import AddTask from './AddTask'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    }
    this.getTasks = this.getTasks.bind(this);
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

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <AddTask />
        <TaskList />
      </div>
    );
  }
}

export default App;
