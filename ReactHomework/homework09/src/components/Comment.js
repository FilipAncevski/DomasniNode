import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../actions/CommentsActions";

export const Comment = () => {
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();
  const { id } = useParams();
  const cmt = comments.find((com) => com.id === parseInt(id));
  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div>
      <h1>Comment name:{cmt.name}</h1>
      <h2>Comment email: {cmt.email}</h2>
      <p>Content: {cmt.body}</p>
      {/* {comments.map((comment) => {
        if (comment.id === parseInt(id)) {
          return (
            <>
              <h1>Comment name:{cmt.name}</h1>
              <h2>Comment email: {cmt.email}</h2>
              <p>Content: {cmt.body}</p>
            </>
          );
        }
      })} */}
    </div>
  );
};
