import React from "react";
import PropTypes from "prop-types";

export const Todos = ({ listOfTodos, markTodoAsDone }) => {
  return (
    <ol>
      {listOfTodos.map((todo) => {
        return (
          <li className={todo.done ? "marked-done" : ""} key={todo.id}>
            <span>{todo.text}</span>
            <input
              type="checkbox"
              value={todo.done}
              checked={todo.done}
              onChange={() => {
                markTodoAsDone(todo);
              }}
            />
          </li>
        );
      })}
    </ol>
  );
};

Todos.propTypes = {
  listOfTodos: PropTypes.arrayOf(PropTypes.object),
  markTodoAsDone: PropTypes.func,
};
