import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

const initialState = rootReducer;
const initialStore = createStore(
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export { initialStore };
