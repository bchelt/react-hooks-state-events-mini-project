import React from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const formData = {
    name: "",
    category: "Code"
  }
  const options = categories.map((category, index) => {
    if(category !== "All"){
      return <option key={index} value={category}>{category}</option>
    }
    return null;
  })
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    formData[name] = value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(formData);
  }

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" onSubmit={handleSubmit}/>
    </form>
  );
}

export default NewTaskForm;
