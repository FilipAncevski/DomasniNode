import React, { useState, useEffect } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((json) => setPosts(json))
      .catch((err) => alert(err));
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div id="posts">
      {posts.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>Title post</th>
              <th>Title content</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Waiting for data, please wait</p>
      )}
    </div>
  );
};
