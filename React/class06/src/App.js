import React, { useState, useEffect } from "react";
import { Todos } from "./components/Todos";

export function App() {
  const [car, setCar] = useState({ model: "BMW", year: 2004 });
  const [days, setDays] = useState(["Monday", "Tuesday", "Wednesday"]);
  const [person, setPerson] = useState({ firstName: "1", lastName: "2" });
  const [todos, setTodos] = useState([
    { id: 0, text: "Learn React", done: false },
    { id: 1, text: "Eat Something", done: false },
    { id: 2, text: "Go to Sleep", done: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  function newCar() {
    setCar({
      ...car, //,model,year
      year: 2020,
    });
  }

  function addDays() {
    setDays(["Sunday", ...days, "Thursday"]);
  }

  function markTodoAsDone(todo) {
    console.log(todo);
    setTodos([
      ...todos.map(
        (item) =>
          item.id === todo.id // go barame kliknatiot element po id item.id === todo.id
            ? { id: item.id, text: item.text, done: !item.done } // if -> ako go najdeme go menuvame (t.e. negirame) done propety-to
            : item // za site ostanati elementi vrati vo orginal
      ),
    ]);
  }

  function addNewTodo() {
    if (newTodo.trim() !== "") {
      let newObject = {
        id: todos.length,
        text: newTodo,
        done: false,
      };
      setTodos([...todos, newObject]);
      setNewTodo("");
    } else {
      alert(
        "No Value has been entered\nPlease enter a value then submit the new Todo"
      );
    }
  }

  return (
    <div id="app">
      <input
        type="text"
        placeholder="Enter First Name"
        value={person.firstName}
        onChange={(e) => {
          setPerson({ ...person, firstName: e.target.value });
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Last Name"
        value={person.lastName}
        onChange={(e) => {
          setPerson({ ...person, lastName: e.target.value });
        }}
      />

      <h2>Car:</h2>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <button onClick={newCar}>Buy new Car</button>
      <ul>
        {days.map((day, i) => {
          return <li key={i}>{day}</li>;
        })}
      </ul>
      <button onClick={addDays}>Add Days</button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter New Todo"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button onClick={addNewTodo}>Add New Todo</button>
      <Todos listOfTodos={todos} markTodoAsDone={markTodoAsDone} />
    </div>
  );
}
