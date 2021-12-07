import React from 'react'
import { Link } from "react-router-dom"

export default function navigation() {
    return (
        <ul>
            <li><Link to="/">Startsida</Link></li>
            <li><Link to="/contact">Kontakt oss</Link></li>
            <li><Link to="/meny">Meny</Link></li>
        </ul>
    )
}
