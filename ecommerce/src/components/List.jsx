import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function List() {
    const [list, setList] = useState([])

    useEffect(() => {
        const url = "https://mock-data-api-2021-default-rtdb.europe-west1.firebasedatabase.app/ecommerce/products.json"
        fetch(url)
            .then(res => res.json())
            .then(data => setList(data))
    }, [])
    const datalist = Object.entries(list);
    return (
        <>
            {datalist.map((item, index) => {
                return (
                    <div>
                        {/* {console.log(datalist)} */}
                        <h2>{item[1].name}</h2>
                        <img src={item[1].images[0].src.small} alt={item[1].images[0].alt} />
                        <li><Link to={`/${item[0]}`} key={index}>Details</Link></li>
                    </div>
                )
            })}
        </ >
    )
}