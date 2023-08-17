import React from "react";
import Task from "./Task";
import {v4 as uuidv4} from 'uuid'

function TaskList({tasks, onDeleteTask}) {
  
  return (
    <div className="tasks">
      {tasks.map((task) => (<Task onDeleteTask={(task) =>{
        onDeleteTask(task)}} task={task} key={uuidv4()}/>))}
    </div>
  );
}

export default TaskList;
