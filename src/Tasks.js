import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Tasks = ({task, callback}) =>{

  const handleClick = (event) => {
    let periodicity = task.periodicity;
    let id = task._id;
    const date = new Date();
    const newDate = date.addDays(periodicity);
    callback(id, newDate);
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
      <button className="btn complete" onClick={handleClick}>Complete</button>
    </div>
  )
}


export default Tasks;