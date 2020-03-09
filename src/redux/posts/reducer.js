export const initialState = {
    data: [],
    loading: false
};

export const posts = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POST_BEGIN':
            return {
                ...state,
                loading: true
            };
        case 'FETCH_POST_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case 'FETCH_POST_ERROR':
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};
