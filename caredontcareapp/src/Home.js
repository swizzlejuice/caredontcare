import React from 'react';
import { Link } from 'react-router-dom';

<header>
    <h1><Link to="/home" style={{ color: '#f6f3eb' }}>care </Link></h1>
        <nav>
            <ul>
                <li><Link to="/home" style={{ color: '#f6f3eb' }}>Home</Link></li>
                <li><Link to="/journal" style={{ color: '#f6f3eb' }}>Journal</Link></li>
                <li><Link to="/mood-tracker" style={{ color: '#f6f3eb' }}>Mood Tracker</Link></li>
                <li><Link to="/sleep-tracker" style={{ color: '#f6f3eb' }}>Sleep Tracker</Link></li>
            </ul>
        </nav>
</header>