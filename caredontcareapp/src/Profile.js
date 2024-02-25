import { Link } from 'react-router-dom';
import { Nav } from './Nav.js';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { getDatabase, ref, onValue, get } from "firebase/database";
import { getAuth } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';



export function ProfilePage() {
    const [showModal, setShowModal] = useState(false); // Add state to control the modal visibility
    
    return (
        <body>
            <div>
                <Nav />
                <p className="profile-name">clarabelle</p>
            </div>
        </body>
    );
}
  

