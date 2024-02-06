import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./editTodoForm";
import "../styles/TodoWrapper.css";

export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  let toggleTask = (id) => {
    setTodos(() => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
    });
  };

  let deleteTodo = (id) => {
    setTodos(() => {
      return todos.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  let editTodo = (id) => {
    setTodos(() => {
      return todos.map((todo) => {
        return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
      });
    });
  };

  let editTask = (task, id) => {
    setTodos(() => {
      return todos.map((todo) => {
        return todo.id === id
          ? { ...todo, task: task, isEditing: !todo.isEditing }
          : todo;
      });
    });
  };

  console.log(todos);
  let addTodo = (todo) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
      ];
    });
  };
  return (
    <div className="TodoWrapper">
      <h2>Get Things Done!</h2>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm key={index} editTask={editTask} todo={todo} />
        ) : (
          <Todo
            todo={todo}
            key={index}
            toggle={toggleTask}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}
