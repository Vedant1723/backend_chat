import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import adminContext from "../../../Context/Admin/adminContext";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const AdminContext = useContext(adminContext);
  const { login, isAuth, createAdmin } = AdminContext;
  const history = useHistory();
  useEffect(() => {
    if (isAuth) {
      history.push("/adminDashboard");
    }
  }, []);

  const submitData = () => {
    const formData = {
      name: name,
      email: email,
      password: password,
    };
    createAdmin(formData);
  };

  return (
    <div>
      <h2>Signup</h2>
      Name of Admin{" "}
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
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
      <Link to="/admin">Login</Link>
    </div>
  );
};

export default Signup;
