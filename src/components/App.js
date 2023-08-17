import React, {useState}from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const onDeleteTask = (taskToBeDeleted) =>{
    setTasks(tasks.filter((task) => taskToBeDeleted !== task));
  }
  
  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES.slice(1)} onTaskFormSubmit = {onTaskFormSubmit}/>
      <TaskList tasks={tasks} onDeleteTask={onDeleteTask}/>
    </div>
  );
}

export default App;
