import React, { useState, useEffect } from 'react'

export default function Detail(props) {
    const [detail, setDetail] = useState(null)

    useEffect(() => {
        const url = `https://mock-data-api-2021-default-rtdb.europe-west1.firebasedatabase.app/ecommerce/products/${props.id}.json`

        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [props.id])

    return (
        <div>
            {detail ? (
                <>
                    {console.log(detail)}
                    {/* {console.log(detail.images[0].alt)} */}

                    <h2>{detail.name}</h2>
                    <p>{detail.description}</p>
                    <img src={detail.images[0].src.small} alt={detail.name} />
                    <p>Alt-text: {detail.images[0].alt}</p>
                    <p>Price: {detail.price}$</p>
                    <p>Stock: {detail.rating}</p>
                    <p>Rating {detail.stock}</p>
                    <p>ID: {detail.id}</p>

                </>
            ) : "Not Found"}

        </div>
    )
}