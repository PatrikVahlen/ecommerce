import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function List() {
    const [list, setList] = useState([])

    useEffect(() => {
        const url = "https://mock-data-api-2021-default-rtdb.europe-west1.firebasedatabase.app/news.json"
        fetch(url)
            .then(res => res.json())
            .then(data => setList(data))
    }, [])

    return (
        <div>
            <ul>
                {list.map((item, index) => {
                    return (
                        <>
                            <h2>{item.title}</h2>
                            <img src={item.urlToImage} alt={item.title} />
                            <li><Link to={`/${index}`} key={index}>{item.title}</Link></li>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}