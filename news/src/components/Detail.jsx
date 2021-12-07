import React, { useState, useEffect } from 'react'

export default function Detail(props) {
    const [detail, setDetail] = useState({})

    useEffect(() => {
        const url = `https://mock-data-api-2021-default-rtdb.europe-west1.firebasedatabase.app/news/${props.id}.json`

        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [props.id])

    return (
        <div>
            {detail.source ? (
                <>
                    <h2>{detail.title}</h2>
                    <img src={detail.urlToImage} alt={detail.title} />
                    <p>{detail.content}</p>
                    <p>{detail.publishedAt}</p>
                    <p>{detail.author}</p>
                    <p>{detail.source.name}</p>
                </>
            ) : "Not Found"}

        </div>
    )
}