import { NEXT_PAGE, PREV_PAGE } from "./types"

export const nextPage = () => (dispatch) => {
    dispatch({
        type: NEXT_PAGE,
    })
}

export const prevPage = () => (dispatch) => {
    dispatch({
        type: PREV_PAGE,
    })
}
