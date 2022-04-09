import React from "react";

export const Student = (props) => {
  console.log(props);
  return (
    <div className="student">
      <p>Student: {props.student.name}</p>
      <p>Last Name: {props.student.lastName}</p>
      <p>College: {props.student.college}</p>
    </div>
  );
};
