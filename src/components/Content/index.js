import React from "react"

// Component
import Card from "../Card/card"

function Content({ loadingState, postsState }) {
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
        <div className="container">
            <h1 className="news-title">Kabar Apple Terbaru</h1>
            <div className="row">{renderContent()}</div>
        </div>
    )
}

export default Content
