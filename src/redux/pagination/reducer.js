import { NEXT_PAGE, PREV_PAGE } from "./types"

const initialPageState = {
    currentPage: 1,
}

export const paginate = (state = initialPageState, action) => {
    switch (action.type) {
        case NEXT_PAGE:
            console.log("NExt reducer")
            return {
                ...state,
                currentPage: state + 1,
            }
        case PREV_PAGE:
            return {
                ...state,
                currentPage: state - 1,
            }

        default:
            return state
    }
}
