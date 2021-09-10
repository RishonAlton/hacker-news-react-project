import React from 'react'
import { useGlobalContext } from './context'


const News = () => {

    const { isLoading, hits, removeItem } = useGlobalContext()

    if(isLoading) {
        return <div className="loading"></div>
    }

    return (
        <section className="section news-section">
            {
                hits.map(item => {
                    const { author, objectID: id, title, num_comments, url, points } = item
                    return (
                    <article key={id} className="news">
                        <h4 className="title">{title}</h4>
                        <p className="news-info">
                            {points} points by {author} | {num_comments} comments
                        </p>
                        <a href={url} className="read-more" target="_blank" rel="noopener noreferrer">Read More</a>
                        <button className="remove-button" onClick={() => removeItem(id)}>Remove</button>
                    </article>
                    )
                })
            }
        </section>
    )

}


export default News
