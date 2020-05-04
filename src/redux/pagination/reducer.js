import { NEXT_PAGE, PREV_PAGE } from "./types";

const initialPage = {
    currentPage: 1
};

export const paginate = (state = initialPage, action) => dispatch => {
    switch (action.type) {
        case NEXT_PAGE:
            return {
                ...state,
                currentPage: state + 1
              };

        default:
            break;
    }
};
