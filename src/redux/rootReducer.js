import { combineReducers } from "redux"

import { posts } from "./posts/reducer"
import { pagination } from "./pagination/reducer"
export default combineReducers({
    posts,
    pagination,
})
