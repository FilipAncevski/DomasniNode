import React from "react";
import { Welcome } from "./components/Welcome";
import { Comments } from "./components/Comments";
import { Student } from "./components/Student";
import { StudentClass } from "./components/StudentClass";
import { FruitList } from "./components/FruitList";

const name = "Filip";
const surname = "Anchevski";
const age = 23;
const hasComments = true;
const person = {
  name: "Filip",
  lastName: "Anchevski",
  college: "Ekonomski",
};
let fruits = ["apple", "pineapple", "banana", "orange"];

export const App = () => {
  return (
    <div id="app">
      <Welcome ime={"Petar"} prezime={"Perovski"} age={15} />
      <hr />
      <h2>Some Content</h2>
      <hr />
      <Welcome ime={name} prezime={surname} age={age} />
      <hr />
      <Comments hasComments={hasComments} multipleyComments={false} />
      <hr />
      <Student student={person} />
      <hr />
      <StudentClass student={person} />
      <hr />
      <FruitList fruits={fruits} />
    </div>
  );
};
