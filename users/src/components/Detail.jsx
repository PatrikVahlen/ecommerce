import React, { useState, useEffect } from 'react'

export default function Detail(props) {
    const [detail, setDetail] = useState({})

    useEffect(() => {
        const url = `https://mock-data-api-2021-default-rtdb.europe-west1.firebasedatabase.app/users/${props.id}.json`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [])

    return (
        <div>
            {detail ? (
                <>
                    <h2>{detail.name}</h2>
                    <p>{detail.username}</p>
                    <a href={`mailto:${detail.email}`}>{detail.email}</a>
                </>
            ) : "Not Found"}

        </div>
    )
}