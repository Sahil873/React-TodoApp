/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles/Todo.css";

export default function Todo({ todo, index, toggle, deleteTodo, editTodo }) {
  return (
    <div key={index} className="Todo">
      <p
        onClick={() => {
          toggle(todo.id);
        }}
        className={todo.completed ? "completed" : ""}
      >
        {todo.task}
      </p>
      <div className="operations">
        <FontAwesomeIcon
          className="icons"
          onClick={() => {
            editTodo(todo.id);
          }}
          icon={faPenToSquare}
        />
        <FontAwesomeIcon
          className="icons"
          onClick={() => {
            deleteTodo(todo.id);
          }}
          icon={faTrash}
        />
      </div>
    </div>
  );
}
