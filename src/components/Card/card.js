import React, { useState, useEffect, useCallback } from "react"
import axios from "axios"

function Card({ title, links, id }) {
    const { author } = links
    const [authorName, setauthorName] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [thumbnailIsLoaded, setThumbnailIsLoaded] = useState(false)

    useEffect(() => {
        getAuthor()
        getThumbnail()
    }, [])

    const getAuthor = () => {
        axios
            .get(author[0].href)
            .then((json) => {
                setauthorName(json.data.name)
            })
            .catch((error) => console.log(error))
    }

    const getThumbnail = () => {
        axios
            .get(links["wp:featuredmedia"][0].href)
            .then((json) => {
                const { source_url } = json.data.media_details.sizes.thumbnail
                setThumbnail(source_url)
            })
            .catch((error) => console.log(error))
    }

    return (
        <div className="d-flex flex-row mb-4">
            {!thumbnailIsLoaded && (
                <div className="card-thumbnail-loading mr-4" />
            )}
            <img
                onLoad={() => setThumbnailIsLoaded(true)}
                className="card--thumbnail mr-4"
                src={thumbnail}
                alt="thumbnail"
                style={thumbnailIsLoaded ? {} : { display: "none" }}
            />
            <div className="d-flex flex-column justify-content-between">
                <span style={{ color: "red" }}>{authorName}</span>
                <h3 style={{ fontWeight: "700", fontSize: "22px" }}>{title}</h3>

                <a href={`/post/${id}`}>Baca selengkapnya</a>
            </div>
        </div>
    )
}

export default Card
