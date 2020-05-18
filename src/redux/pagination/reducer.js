import { NEXT_PAGE, PREV_PAGE, GET_TOTAL_PAGE } from "./types"

export const initialState = {
    page: 1,
    totalPage: null,
}

export const pagination = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_PAGE:
            console.log("Reducer next")
            return {
                ...state,
                page: state.page + 1,
            }

        case PREV_PAGE:
            console.log("Reducer prev")
            return {
                ...state,
                page: state.page - 1,
            }

        case GET_TOTAL_PAGE:
            return {
                ...state,
                totalPage: action.payload,
            }

        default:
            return state
    }
}
