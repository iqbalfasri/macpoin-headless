import React, { useEffect, useCallback, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

// Actions
import { getAllPosts } from "../redux/posts/action"
import { nextPage, prevPage } from "../redux/pagination/action"
import Header from "../components/Header"
import Pagination from "../components/Pagination"
import Content from "../components/Content"

function Home() {
    const dispatch = useDispatch()
    const paginate = useSelector((state) => state.pagination.page)
    const totalPage = useSelector((state) => state.pagination.totalPage)

    const initFetch = useCallback(() => {
        dispatch(getAllPosts(6, paginate))
    }, [dispatch, paginate])

    useEffect(() => {
        initFetch()
    }, [initFetch])

    const postsState = useSelector((state) => state.posts.data)
    const loadingState = useSelector((state) => state.posts.loading)

    const handleBack = () => {
        dispatch(prevPage())
    }

    const handleNext = () => {
        dispatch(nextPage())
    }

    return (
        <React.Fragment>
            <Header />
            <Content
                loadingState={loadingState}
                postsState={postsState}
            />
            <Pagination
                page={paginate}
                totalPage={totalPage}
                handleBack={handleBack}
                handleNext={handleNext}
            />
        </React.Fragment>
    )
}

export default Home
