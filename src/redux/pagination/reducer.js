import { NEXT_PAGE, PREV_PAGE } from "./types"

export const initialState = {
    page: 1,
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

        default:
            return state
    }
}
