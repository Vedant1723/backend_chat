import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminDashboard from "./Layout/Admin/AdminDashboard/AdminDashboard";
import "./App.css";
import AdminState from "./Context/Admin/AdminState";
import Chat from "./Layout/Chat/Chat";
import Login from "./Layout/Admin/AdminLogin/Login";
import Signup from "./Layout/Admin/AdminLogin/Signup";

function App() {
  return (
    <AdminState>
      <Router>
        <Route path="/" component={Chat} />
        <Route path="/admin" component={Login} />
        <Route path="/adminDashboard" component={AdminDashboard} />
        <Route path="/adminSignup" component={Signup} />
      </Router>
    </AdminState>
  );
}

export default App;
