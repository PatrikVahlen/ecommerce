import React, { useState, useEffect } from 'react'

export default function Detail(props) {
    const [detail, setDetail] = useState({})

    useEffect(() => {
        const url = `https://mock-data-api-2021-default-rtdb.europe-west1.firebasedatabase.app/images/${props.id}.json`

        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [props.id])

    return (
        <div>
            {detail ? (
                <>
                    <h2>{detail.title}</h2>
                    <img src={detail.imageURL} alt={detail.title} />
                    <h2>ID: {detail.id}</h2>
                    <p>URL: {detail.imageURL}</p>
                    <p>Likes: {detail.likes}</p>
                </>
            ) : "Not Found"}

        </div>
    )
}