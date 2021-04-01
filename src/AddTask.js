import React from 'react';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const task = this.state.task;
    const periodicity = this.state.periodicity;
    this.props.callback(task, periodicity);
    this.setState({
      task: '',
      periodicity: '' ,
    })
  }

  render() {
    return (
      <div>
        <h2>add task</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Job:
            <input type="text" name="task" value={this.state.task} onChange={this.handleChange} />
          </label>
          <label>
            Periodicity: (in days)
            <input type="text" name="periodicity" value={this.state.periodicity} onChange={this.handleChange} />
          </label>
          <button className="btn submit" onClick={this.handleClick}>Enter</button>
        </form>
      </div>
    )
  }
}

export default AddTask;