import React from 'react';

const Tasks = ({task, callback, deleteTask}) =>{

  const handleClick = (event) => {
    let periodicity = task.periodicity;
    let id = task._id;
    const date = new Date();
    const newDate = date.addDays(periodicity);
    callback(id, newDate);
  }

  const handleDelete = (event) => {
    deleteTask(task._id)
  }

  // eslint-disable-next-line no-extend-native
  Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  return (
    <div className="taskTile">
      <div className="date">{task.nextDue.slice(0, 10)}</div>
      <div className="task">{task.name}</div>
      <div>
        <button className="btn complete" onClick={handleClick}>Complete</button>
        <button className="btn delete" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}


export default Tasks;