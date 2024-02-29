import React from 'react';
import { Link } from 'react-router-dom';

export function Nav(props) {
    return (
        <header>
            <nav>
                    <h1 className="header-h"><Link to="/home">care or don't care</Link></h1>
                    <Link to="/profile"><img className="profile-pic" src="img/woman.png" alt="profile icon"/></Link>
                    {/* <!-- <a href="https://www.flaticon.com/free-icons/female" title="female icons">Female icons created by Prosymbols Premium - Flaticon</a> --> */}
            </nav>
        </header>
)}