import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../actions/CommentsActions";
import { Link } from "react-router-dom";

export const Comments = () => {
  const comments = useSelector((state) => state.comments.comments);
  const message = useSelector((state) => state.comments.message);
  const dispatch = useDispatch();

  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div>
      {message && <p>{message}</p>}
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => {
            return (
              <tr key={comment.id}>
                <td>
                  <Link to={`/comments/${comment.id}`}>{comment.id}</Link>
                </td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
