import axios from "axios";
import { ActionTypes } from "./ActionTypes";
import { options } from "../../constants/apiConstants";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const setLoading = (payload) => ({
  type: ActionTypes.SET_LOADING,
  payload,
});

//Movie Request
export const getMovies = () => {
  return async function (dispatch) {
    axios
      .get("/movie/popular", options)
      .then((res) =>
        dispatch({
          type: ActionTypes.SET_MOVIES,
          payload: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };
};

//Category Request
export const getGenres = () => (dispatch) => {
  axios
    .get("/genre/movie/list", options)
    .then((res) =>
      dispatch({
        type: ActionTypes.SET_CATEGORIES,
        payload: res.data.genres,
      })
    )
    .catch((err) => console.log(err));
};
