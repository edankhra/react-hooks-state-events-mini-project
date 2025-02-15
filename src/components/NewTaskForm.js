import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      text: text,
      category: category,
    };

    onTaskFormSubmit(newTask);
    setText("");
  };


  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text}
          onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category}
          onChange={(e) => setCategory(e.target.value)}>
         {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
