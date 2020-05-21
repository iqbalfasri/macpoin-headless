import React, { useEffect, useCallback, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

// Style Component
import Card from "../components/Card/card"

// Actions
import { getAllPosts } from "../redux/posts/action"
import { nextPage, prevPage } from "../redux/pagination/action"
import Header from "../components/Header"

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
                <div style={{ textAlign: 'center' }} className="row mb-5">
                    <div className="col-md-4">
                        <button
                            onClick={() => handleBack()}
                            disabled={paginate === 1}
                            className="pagination"
                        >
                            Sebelumnya
                        </button>
                    </div>
                    <div className="col-md-4">
                        <span>
                            {paginate} / {totalPage === null ? 0 : totalPage}
                        </span>
                    </div>
                    <div className="col-md-4">
                        <button
                            onClick={() => handleNext()}
                            className="pagination"
                        >
                            Selanjutnya
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home
