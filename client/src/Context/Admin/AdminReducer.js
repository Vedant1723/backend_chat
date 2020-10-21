import {
  CREATE_ADMIN,
  LOAD_ADMIN,
  LOGIN_FAIL,
  LOGIN_PASS,
  LOGOUT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_PASS:
    case CREATE_ADMIN:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("auth", true);
      return {
        ...state,
        token: action.payload.token,
        isAuth: true,
      };
    case LOGIN_FAIL:
      localStorage.setItem("token", null);
      localStorage.setItem("auth", null);
      return {
        ...state,
        token: null,
        isAuth: null,
      };
    case LOAD_ADMIN:
      return {
        ...state,
        admin: action.payload,
        loading: false,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("auth");
      return {
        ...state,
        token: null,
        isAuth: null,
      };
    default:
      return {
        ...state,
      };
  }
};
