import {
    FETCH_POST_BEGIN,
    FETCH_POST_SUCCESS,
    FETCH_POST_ERROR,
    FETCH_CONTENT_BEGIN,
    FETCH_CONTENT_SUCCESS,
    FETCH_CONTENT_ERROR,
} from "./types"

export const initialState = {
    data: [],
    content: "",
    loading: false,
}

export const posts = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST_BEGIN:
            return {
                ...state,
                loading: true,
            }
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case FETCH_POST_ERROR:
            return {
                ...state,
                loading: false,
            }
        case FETCH_CONTENT_BEGIN:
            return {
                ...state,
                loading: true,
            }
        case FETCH_CONTENT_SUCCESS:
            return {
                ...state,
                loading: false,
                content: action.payload,
            }
        case FETCH_CONTENT_ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export const page = (state = 1, action) => {
    switch (action.type) {
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                page: state + 1,
            }
        default:
            return state
    }
}
