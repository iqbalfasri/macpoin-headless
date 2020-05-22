import React, { useEffect, useCallback, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

// Style Component
import Card from "../components/Card/card"

// Actions
import { getAllPosts } from "../redux/posts/action"
import { nextPage, prevPage } from "../redux/pagination/action"
import Header from "../components/Header"
import Pagination from "../components/Pagination"

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

    const renderContent = () => {
        if (loadingState) {
            return <span>Loading...</span>
        } else {
            return (
                <>
                    {postsState.map((post, index) => (
                        <Card
                            id={post.id}
                            key={index}
                            date={post.date}
                            title={post.title.rendered}
                            links={post._links}
                        />
                    ))}
                </>
            )
        }
    }

    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <h1 className="news-title">Kabar Apple Terbaru</h1>
                <div className="row">{renderContent()}</div>
            </div>
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
