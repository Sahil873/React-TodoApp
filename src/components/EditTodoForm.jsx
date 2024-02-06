/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/EditTodoForm.css";

export default function EditTodoForm({ editTask, todo }) {
  const [value, setValue] = useState(todo.task);

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      alert("Enter a valid task");
    } else {
      editTask(value, todo.id);
    }
  };
  let handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className="EditTodoform" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="update task"
        onChange={() => handleChange(event)}
      />
      <button type="submit" className="edit-bnt">
        update task
      </button>
    </form>
  );
}
