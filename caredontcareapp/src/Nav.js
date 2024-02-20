import React from 'react';
import { Link } from 'react-router-dom';

export function Nav(props) {
    return (
        <header>
            <nav>
                <h1 className="header-h"><Link to="/home">care or dont care</Link></h1>
                <Link to="/profile"><img className="profile-pic" src="img/woman.png" alt="profile icon"/></Link>
            </nav>
        </header>
)}