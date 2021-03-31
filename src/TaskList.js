import React from 'react';
import Tasks from './Tasks.js';

const TaskList = ({tasks, callback}) => (
  tasks.map((task) => {
    return <Tasks  task={task} callback={callback}/>
  })
)

export default TaskList;