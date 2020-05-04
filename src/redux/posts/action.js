import axios from "axios"

import {
    FETCH_POST_BEGIN,
    FETCH_POST_SUCCESS,
    FETCH_POST_ERROR,
    FETCH_CONTENT_BEGIN,
    FETCH_CONTENT_SUCCESS,
    FETCH_CONTENT_ERROR,
} from "./types"
import { BASE_URL } from "../../helpers/constant"

export const getAllPosts = (perPage = 5, page) => (dispatch) => {
    dispatch({
        type: FETCH_POST_BEGIN,
    })

    axios
        .get(`${BASE_URL}/posts?per_page=${perPage}&page=${page}`)
        .then((json) => {
            dispatch({
                type: FETCH_POST_SUCCESS,
                payload: json.data,
            })

            return json
        })
        .catch((error) => {
            dispatch({
                type: FETCH_POST_ERROR,
            })

            return error
        })
}

export const getContentPost = (idPost) => (dispatch) => {
    dispatch({
        type: FETCH_CONTENT_BEGIN,
    })

    axios
        .get(`${BASE_URL}/posts/${idPost}`)
        .then((json) => {
            dispatch({
                type: FETCH_CONTENT_SUCCESS,
                payload: json.data.content.rendered,
            })
        })
        .catch((error) => {
            dispatch({
                type: FETCH_CONTENT_ERROR,
            })

            return error
        })
}
