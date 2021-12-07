import React from 'react'
import { useParams } from 'react-router-dom'


export default function MenyDishPage() {

    const data = {
        "tempura-rolls": {
            heading: "Tempura Sushi",
            text: "Our awesome fried sushi"
        },
        "egg-rolls": {
            heading: "Poke Bowl",
            text: "Hawai Asian Fusion"
        },
        "poke-bowl": {
            heading: "Egg Rolls",
            text: "Our awesome Egg Rolls"
        }
    }

    let params = useParams();
    console.log(params);
    return (
        <div>

            <h2>
                {data[params.dish].heading}
            </h2>
            <p>
                {data[params.dish].text}
            </p>
            {/* <p>
                {params.dish}
            </p> */}
        </div>
    )
}