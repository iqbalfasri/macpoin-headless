import { combineReducers } from "redux";

import { posts } from "./posts/reducer";
import { paginate } from './pagination/reducer'

export default combineReducers({
    posts,
    paginate
});
