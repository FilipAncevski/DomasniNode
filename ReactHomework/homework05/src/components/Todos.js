import React from "react";
import PropTypes from "prop-types";

export const Todos = ({ todos, markTodo, deleteTodo, editTodo }) => {
  return (
    <div id="todos">
      <ol>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <input
                type="checkbox"
                value={todo.done}
                checked={todo.checked}
                onChange={() => markTodo(todo)}
              />
              <button type="button" onClick={() => deleteTodo(todo)}>
                Delete
              </button>
              <button
                type="button"
                onClick={() => {
                  editTodo(todo);
                }}
              >
                Edit Todo
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  markTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func,
};
