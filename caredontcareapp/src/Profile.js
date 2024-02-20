import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './Nav.js';

export function ProfilePage() {
    return (
        <body>
            <div>
                <Nav />
                <p className="profile-name">clarabelle</p>
            </div>
        </body>
    );
}
  