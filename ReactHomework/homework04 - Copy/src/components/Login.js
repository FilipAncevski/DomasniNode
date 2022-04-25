import React, { useEffect, useState } from "react";
import { Input } from "./Input";

export const Login = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [fieldType, setFieldType] = useState("password");

  const [commentType, setCommentType] = useState("text");

  const [comment, setComment] = useState("");

  useEffect(() => {
    console.log("Username: ", username);
    console.log("Password: ", password);
    console.log("Comment: ", comment);
  }, [username, password, comment]);

  function setToggle() {
    setFieldType(fieldType === "password" ? "text" : "password");
  }

  function setComments() {
    setCommentType(commentType === "text" ? "comment" : "text");
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}\nCommend: ${comment}`);
  }

  return (
    <div id="login">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type={fieldType}
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          setToggle={setToggle}
        />
        {commentType === "text" ? (
          <Input
            type={commentType}
            name="comment"
            placeholder="Enter Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            setComments={setComments}
          />
        ) : (
          <textarea
            type={commentType}
            name="text"
            placeholder="Enter Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onClick={setComments}
          />
        )}
        {/* <textarea
          type={commentType}
          name="comment"
          placeholder="Enter Comments"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <button
          type="button"
          className="comment-button"
          onClick={() => setComments()}
        >
          <i className="fa fa-comments-o"></i>
        </button> */}
        <button className="action-button">Sign in</button>
      </form>
    </div>
  );
};
