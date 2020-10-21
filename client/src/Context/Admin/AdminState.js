import adminReducer from "./AdminReducer";
import AdminContext from "./adminContext";
import axios from "axios";
import React, { useReducer } from "react";
import {
  CREATE_ADMIN,
  LOAD_ADMIN,
  LOGIN_FAIL,
  LOGIN_PASS,
  LOGOUT,
} from "../types";

const AdminState = (props) => {
  const inititalState = {
    token: localStorage.getItem("token"),
    admin: {},
    admins: [],
    isAuth: JSON.parse(localStorage.getItem("auth")),
    loading: true,
    error: null,
  };
  const [state, dispatch] = useReducer(adminReducer, inititalState);

  //Login Admin
  const login = async (formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("/adminAuth", formData, config);
      console.log(res.data);
      dispatch({ type: LOGIN_PASS, payload: res.data });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.message });
    }
  };
  const createAdmin = async (formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("/admin", formData, config);
      dispatch({ type: CREATE_ADMIN, payload: res.data });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.message });
    }
  };
  const logout = () => {
    dispatch({ type: LOGOUT });
  };
  const loadAdmin = async () => {
    try {
      const config = {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      };
      const res = await axios.get("/adminAuth", config);
      console.log("Admin", res.data);
      dispatch({ type: LOAD_ADMIN, payload: res.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <AdminContext.Provider
      value={{
        token: state.token,
        isAuth: state.isAuth,
        error: state.error,
        admin: state.admin,
        admins: state.admins,
        loading: state.loading,
        login,
        logout,
        createAdmin,
        loadAdmin,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminState;
