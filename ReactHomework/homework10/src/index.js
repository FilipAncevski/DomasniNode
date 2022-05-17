import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Users } from "./components/users";
import { User } from "./components/users/User";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);
