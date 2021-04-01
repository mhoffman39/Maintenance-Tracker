import React from 'react';
import Tasks from './Tasks.js';

const TaskList = ({tasks, callback, deleteTask}) => (
  tasks.map((task) => {
    return <Tasks  task={task} callback={callback} deleteTask={deleteTask}/>
  })
)

export default TaskList;