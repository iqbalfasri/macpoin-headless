import axios from "axios";

import {
  FETCH_POST_BEGIN,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR
} from "./types";
import { BASE_URL } from "../../helpers/constant";

export const getAllPosts = (perPage = 10, page = 1) => dispatch => {
  dispatch({
    type: FETCH_POST_BEGIN
  });

  axios
    .get(`${BASE_URL}/posts?per_page=${perPage}&page=${page}`)
    .then(json => {
      dispatch({
        type: FETCH_POST_SUCCESS,
        payload: json.data
      });

      return json;
    })
    .catch(error => {
      dispatch({
        type: FETCH_POST_ERROR
      });

      return error;
    });
};
