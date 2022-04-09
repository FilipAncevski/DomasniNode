import React from "react";

export class StudentClass extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="student-class">
        <p>Student Class</p>
        <h4>
          {this.props.student.name} {this.props.student.lastName}{" "}
          {this.props.student.college}
        </h4>
      </div>
    );
  }
}
