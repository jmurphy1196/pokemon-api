import { act } from "react-dom/test-utils";
import { GET_FAVORITE_PAGE } from "../types";

const initialState = {
  favorites: [],
  pageFavorites: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FAVORITE_PAGE:
      return {
        ...state,
        pageFavorites: [...action.payload],
      };
    default:
      return state;
  }
}
