import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// Actions
import { getContentPost } from "../redux/posts/action"

function Post(props) {
    const idPost = props.match.params.id

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getContentPost(idPost))
    }, [])

    return <div>Post</div>
}

export default Post
