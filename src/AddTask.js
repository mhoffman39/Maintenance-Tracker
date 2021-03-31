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
    console.log('test')
  }

  render() {
    return (
      <div>
        <h2>add task</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Date:
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
          </label>
          <label>
            Job:
            <input type="text" name="task" value={this.state.task} onChange={this.handleChange} />
          </label>
          <label>
            Periodicity:
            <select value={this.state.periodicity} onChange={this.handleChange}>
              <option value="monthly">Monthly</option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}

export default AddTask;