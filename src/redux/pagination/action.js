import { NEXT_PAGE, PREV_PAGE } from "./types"

export const nextPage = () => (dispatch) => {
    console.log("XXX")
    dispatch({
        type: NEXT_PAGE,
    })
}

export const prevPage = () => (dispatch) => {
    dispatch({
        type: PREV_PAGE,
    })
}
