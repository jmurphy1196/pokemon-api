import axios from "axios";
import {
  CLEAR_ERRORS,
  SET_AUTHENTICATED,
  SET_ERRORS,
  SET_UNAUTHENTICATED,
} from "../types";

const userURI = process.env.SERVER_URI || `http://localhost:5000`;

export const loginUser = (formData, history) => {
  return async (dispatch) => {
    const data = await axios.post(`${userURI}/login`, formData);

    if (data.data.token) {
      localStorage.setItem("token", data.data.token);
      dispatch({ type: SET_AUTHENTICATED });
      dispatch({ type: CLEAR_ERRORS });
      history.push("/");
    } else {
      dispatch({ type: SET_ERRORS, payload: data.data.errors });
    }

    return data;
  };
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const signupUser = (formData, history) => {
  return async (dispatch) => {
    try {
      const data = await axios.post(`${userURI}/signup`, formData);
      if (data.data.msg) {
        dispatch({ type: CLEAR_ERRORS });
        history.push("/login");
      } else {
        //error handling
        dispatch({ type: SET_ERRORS, payload: data.data.errors });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
