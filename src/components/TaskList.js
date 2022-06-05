import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks, catFilter }) {
  const handleDelete = function (e) {
    let targetTask = e.target.parentNode.children[1].textContent
    const newList = tasks.filter((task) => {
      if (task.text !== targetTask) {
        return {'text': task.text, 'category': task.category}
      }
      return null;
    })
    console.log(newList)
    setTasks(newList);
  }
  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        if (catFilter === 'All' || catFilter === task.category) {
          return <Task key={index} text={task.text} category={task.category} handleDelete={handleDelete}/>
        }
        return null;
      })}
    </div>
  );
}

export default TaskList;
