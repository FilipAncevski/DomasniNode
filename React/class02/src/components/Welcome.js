import React from "react";

export const Welcome = (props) => {
  return (
    <div className="welcome">
      <p>
        Hi and Welcome to my App. My name is {props.ime} {props.prezime}. I am{" "}
        {props.age} old
      </p>
    </div>
  );
};
