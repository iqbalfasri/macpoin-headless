import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import axios from "axios"
import moment from 'moment'

function Card({ title, links, id, date }) {
    const { author } = links
    const [avatarUrl, setAvatarUrl] = useState("")
    const [authorName, setauthorName] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [thumbnailIsLoaded, setThumbnailIsLoaded] = useState(false)

    const history = useHistory();

    useEffect(() => {
        const getAuthor = () => {
            axios
                .get(author[0].href)
                .then((json) => {
                    setAvatarUrl(json.data.avatar_urls["48"])
                    setauthorName(json.data.name)
                })
                .catch((error) => console.log(error))
        }

        const getThumbnail = () => {
            axios
                .get(links["wp:featuredmedia"][0].href)
                .then((json) => {
                    const { source_url } = json.data.media_details.sizes.medium
                    setThumbnail(source_url)
                })
                .catch((error) => console.log(error))
        }

        getAuthor()
        getThumbnail()
    }, [])

    return (
        <div className="col-md-4 mb-4">
            <div onClick={() => history.push(`/post/${id}`)} className="card-wrapper">
                {!thumbnailIsLoaded && (
                    <div className="card-thumbnail-loading mr-4" />
                )}
                <img
                    onLoad={() => setThumbnailIsLoaded(true)}
                    className="card-thumbnail mr-4"
                    src={thumbnail}
                    alt="thumbnail"
                    style={thumbnailIsLoaded ? {} : { display: "none" }}
                />
                <div className="card-content">
                    <h3 className="card-content--title">
                        {title}
                    </h3>

                    <div className="card-author">
                        <img alt={authorName} src={avatarUrl} />
                        <div className="card-author--info">
                            <span>{authorName}</span>
                            <span>{moment(date).format("MMM DD, YYYY")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
