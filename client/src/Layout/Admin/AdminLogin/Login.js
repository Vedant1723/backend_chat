import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import adminContext from "../../../Context/Admin/adminContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const AdminContext = useContext(adminContext);
  const { login, isAuth } = AdminContext;
  const history = useHistory();
  useEffect(() => {
    if (isAuth) {
      history.push("/adminDashboard");
    }
  });

  const submitData = () => {
    const formData = {
      email: email,
      password: password,
    };
    login(formData);
  };

  return (
    <div>
      <h2>Login</h2>
      Email of Admin{" "}
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      Password of Admin{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={submitData}>Submit</button>
      <br />
      <Link to="/adminSignup">Signup</Link>
    </div>
  );
};
export default Login;
