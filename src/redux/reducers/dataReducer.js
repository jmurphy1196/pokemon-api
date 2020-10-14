import { GET_FAVORITE_PAGE, SET_FAVORITES } from "../types";

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
    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
}
