import React from 'react'
import { Link } from "react-router-dom"


export default function meny() {
    return (
        <>

            <h2>Meny</h2>
            <ul>
                <li><Link to="/meny/tempura-rolls">Tempura Rolls</Link></li>
                <li><Link to="/meny/egg-rolls">Egg Rolls</Link></li>
                <li><Link to="/meny/poke-bowl">Poke Bowl</Link></li>
            </ul>

        </>
    )
}
