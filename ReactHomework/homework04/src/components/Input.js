import React from "react";
import PropTypes from "prop-types";

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  setToggle,
  setComments,
}) => {
  return (
    <p>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {name === "password" && (
        <button
          type="button"
          className="eye-button"
          onClick={() => setToggle()}
        >
          <i
            className={type === "password" ? "fa fa-eye-slash" : "fa fa-eye"}
          ></i>
        </button>
      )}
      {name === "comment" && (
        <button
          type="button"
          className="commend-button"
          onClick={() => setComments()}
        >
          <i
            className={type === "text" ? "fa fa-comments-o" : "fa fa-comment-o"}
          ></i>
        </button>
      )}
      {/* {name === "text" && (
        <button
          type="button"
          className="commend-button"
          onClick={() => setComments()}
        >
          <i
            className={
              type === "comment" ? "fa fa-comment-0" : "fa fa-comments-0"
            }
          ></i>
        </button>
      )} */}
    </p>
  );
};

Input.prototype = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  setToggle: PropTypes.func,
  setComment: PropTypes.func,
};
