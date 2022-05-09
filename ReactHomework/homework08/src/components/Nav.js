import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Back to Home Page</Link>
      </li>
      <li>
        <Link to="/burgers">Burgers</Link>
      </li>
      <li>
        <Link to="/veganburgers">Vegan Burgers</Link>
      </li>
    </ul>
  );
};
