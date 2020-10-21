import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import adminContext from "../../../Context/Admin/adminContext";

const AdminDasboard = () => {
  const AdminContext = useContext(adminContext);
  const { isAuth, logout, loadAdmin, admin, loading } = AdminContext;
  const history = useHistory();
  useEffect(() => {
    if (isAuth) {
      history.push("/adminDashboard");
      loadAdmin();
    } else {
      history.push("/admin");
    }
  }, [isAuth]);
  const logOutTheUSer = () => {
    logout();
  };
  return (
    <div>
      hello Dashboard
      <br />
      Logged in Username: {admin.name}
      <br />
      <button onClick={logOutTheUSer}>Logout</button>
    </div>
  );
};
export default AdminDasboard;
