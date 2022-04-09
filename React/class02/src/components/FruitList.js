import React from "react";

export const FruitList = (props) => {
  console.log(props);
  return (
    <div className="fruit-list">
      <h2>Fruit List</h2>
      <ul>
        {props.fruits.map((fruit, i) => {
          return <li key={i}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
};
