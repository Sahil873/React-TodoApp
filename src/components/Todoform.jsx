/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Todoform.css";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  let handleSubmit = (e) => {
    // console.log(e);
    if (!value) alert("Task cannot be empty!");
    else {
      addTodo(value);
      setValue("");
    }
    e.preventDefault();
  };
  let handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className="Todoform" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Enter Today's Task"
        onChange={(e) => {
          console.log(e);
          handleChange(event);
        }}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}
