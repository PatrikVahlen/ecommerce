import React from 'react'
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <ul>
            <li><Link to="/">Main Page</Link></li>
            <li><Link to="/events">All Events</Link></li>
            <li><Link to="/events/create">Create Event</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
        </ul>
    )
}
