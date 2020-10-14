import axios from "axios";
import jwtDecode from "jwt-decode";
import { GET_FAVORITE_PAGE, SET_FAVORITES } from "../types";

const URI = process.env.SERVER_URI || `http://localhost:5000`;

export const getFavorites = (page = 1) => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    try {
      const data = await axios.get(`${URI}/my-favorites?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      if (data.data.favorites) {
        dispatch({ type: GET_FAVORITE_PAGE, payload: data.data.favorites });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const addFavorite = (pokeData) => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    try {
      const data = await axios.post(`${URI}/add-favorite`, pokeData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const setFavorites = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    dispatch({ type: SET_FAVORITES, payload: decodedToken.favorites });
  };
};
