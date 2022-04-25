import React, { useEffect, useState } from "react";
import { Todos } from "./components/Todos";

const RID = () => {
  const ID = Math.trunc(Math.random() * 1000000000);
  return ID;
};

export const App = () => {
  let [todos, setTodos] = useState([
    { id: RID(), text: "Studying", done: false },
    { id: RID(), text: "Going to the Gym", done: false },
    { id: RID(), text: "Eating healty", done: false },
  ]);
  const [newTD, setNewTD] = useState("");

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  function addTD() {
    if (newTD.trim() !== "") {
      const td = { id: RID(), text: newTD, done: false };
      setTodos([...todos, td]);
      setNewTD("");
    } else {
      alert("Invalid Values, please enter something WORTHY to be DONE!");
    }
  }

  function checkUncheck(todo) {
    setTodos([
      ...todos.map((td) =>
        td.id === todo.id ? { id: td.id, text: td.text, done: !td.done } : td
      ),
    ]);
  }

  function erase(todo) {
    setTodos([...todos.filter((td) => td.id !== todo.id)]);
  }

  function changeTodo(todo) {
    const clickedTodo = prompt(`Rename ${todo.text}`);
    if (clickedTodo) {
      if (clickedTodo.trim() === "") {
        alert("Stop wasting my time");
      } else {
        setTodos([
          ...todos.map((td) =>
            td.id === todo.id
              ? { id: td.id, text: clickedTodo, done: td.done }
              : td
          ),
        ]);
      }
    }
    if (!clickedTodo) {
      alert("Dont you have any better things to do, then to play with my app?");
    }
  }

  return (
    <div id="app">
      <h1>Your Todos</h1>
      <input
        type="text"
        value={newTD}
        onChange={(e) => setNewTD(e.target.value)}
      />
      <button onClick={addTD}>Add New Todo</button>
      <br />
      <br />
      <Todos
        todos={todos}
        markTodo={checkUncheck}
        deleteTodo={erase}
        editTodo={changeTodo}
      />
    </div>
  );
};
