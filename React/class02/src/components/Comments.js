import React from "react";

export const Comments = (props) => {
  console.log(props);
  return (
    <div className="comments">
      {props.hasComments && <h2>Comments: </h2>}
      {!props.multipleyComments ? (
        <p>Some comments</p>
      ) : (
        <p>Only a few comments</p>
      )}
    </div>
  );
};
