import React, { useState } from "react";
import "../css/App.css";

export const Table = () => {
  // const targetDiv = document.getElementsByClassName("right");
  // const targetID = document.getElementById("tbl");

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  const [surname, setSurname] = useState("");

  const [years, setYears] = useState(0);

  const [show, setShow] = useState(false);

  function usernameInput(event) {
    setUsername(event.target.value);
  }
  function surnameInput(event) {
    setSurname(event.target.value);
  }

  function passwordInput(event) {
    setPassword(event.target.value);
  }

  function emailInput(event) {
    setEmail(event.target.value);
  }

  function yearsInput(event) {
    setYears(event.target.value);
  }

  // function tableChange() {
  // console.log(targetDiv);
  // console.log(targetDiv[0]);
  // targetID.class = "right";
  // if ((targetDiv.classList = "right")) {
  //   return (targetDiv[0].classList = "show");
  // } else if ((targetDiv.classList = "show")) {
  //   return (targetDiv[0].classList = "right");
  // } PAMET ZA DRUG PAT
  // }  VO FORMA AKO STAVIS BUTTON KOGA KJE KLIKNES NA NEGO SEKOGAS JA REFRESHNUVA STRANATA, ZOSTO?

  return (
    <div id="table">
      <div className="left">
        <div className="register">
          <p>To join our community please fill out the form bellow</p>
        </div>
        <div className="form">
          <form>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={usernameInput}
            />
            <br />
            <input
              type="text"
              placeholder="Enter your surname"
              value={surname}
              onChange={surnameInput}
            />
            <br />
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={emailInput}
            />
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={passwordInput}
            />
            <br />
            <input
              type="number"
              placeholder="Enter your age"
              value={years}
              onChange={yearsInput}
            />
            <br />
          </form>
          <button onClick={() => setShow(!show)}>Table</button>
        </div>
      </div>
      <div className="right">
        {show ? (
          <table border="1" id="tbl">
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{username}</td>
                <td>{surname}</td>
                <td>{years}</td>
                <td>{email}</td>
                <td>{password}</td>
              </tr>
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};
