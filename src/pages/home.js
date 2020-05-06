import React, { useEffect, useCallback, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

// Style Component
import Card from "../components/Card/card"

// Actions
import { getAllPosts } from "../redux/posts/action"

function Home() {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)

    const initFetch = useCallback(() => {
        dispatch(getAllPosts(5, currentPage))
    }, [dispatch, currentPage])

    useEffect(() => {
        initFetch()
    }, [initFetch])

    const paginate = useSelector((state) => state.paginate)
    useEffect(() => {
        console.log(paginate, "redux paginate")
    }, [paginate])

    const postsState = useSelector((state) => state.posts.data)
    const loadingState = useSelector((state) => state.posts.loading)

    const handleBack = () => {
        setCurrentPage(currentPage - 1)
    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1)
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
                            title={post.title.rendered}
                            links={post._links}
                        />
                    ))}
                </>
            )
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div
                        className="mb-5"
                        style={{
                            width: "100%",
                            height: "250px",
                            backgroundColor: "#f0f0f0",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h1 style={{ fontWeight: 'bolder' }}>Macpoin.com Headless Version</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <h1
                        className="mb-4"
                        style={{ fontSize: "32px", fontWeight: "900" }}
                    >
                        Kabar Apple Terbaru
                    </h1>
                    {renderContent()}
                </div>
                <div className="col-md-4">
                    <h1
                        className="mb-4"
                        style={{ fontSize: "32px", fontWeight: "900" }}
                    >
                        Tips MacOS &amp; iOS
                    </h1>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-md-4">
                    <button
                        onClick={() => handleBack()}
                        disabled={currentPage === 1}
                        className="pagination"
                    >
                        Sebelumnya
                    </button>
                </div>
                <div className="col-md-4">
                    <span>{currentPage} / 1032</span>
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
    )
}

export default Home
