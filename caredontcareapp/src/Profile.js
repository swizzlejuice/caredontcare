import { Nav } from './Nav.js';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { getDatabase, ref, get } from "firebase/database";
import { getAuth } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

export function ProfilePage() {
    const [showModal, setShowModal] = useState(false); // Add state to control the modal visibility
    
    return (
        <>
            <Nav />
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <UserInfo />
                        <TopicsOfInterest />
                        <Button variant="primary" onClick={() => setShowModal(true)}>Show Cared Posts</Button> {/* Add button to show modal */}
                        <CaredByMe showModal={showModal} setShowModal={setShowModal} /> {/* Pass showModal and setShowModal to the CaredByMe component */}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const UserInfo = () => {
    // Assuming you have some user data
    const username = "@claro007"; // This would be dynamic in a real app
    const bio = "Info major 2024"; // Replace with actual bio

    console.log(username, bio);

    // Removed console.log for production, it's good practice to remove console logs that are used for debugging

    return (
        <div className="text-center my-4">
            {/* The Image component has been removed */}
            <h3 className="username">{username}</h3> {/* Removed the "@" since it's already part of the username */}
            <p className="bio">{bio}</p>
            <Button variant="primary" className="edit-profile-button">Edit Profile</Button>
        </div>
    );
};

const TopicsOfInterest = () => {
    // Example topics
    const topics = ["Sports", "Local News", "Neuroscience"];

    return (
        <div className="my-4">
            {topics.map((topic, index) => (
                <Button key={index} variant="outline-secondary" className="m-1">
                    {topic}
                </Button>
            ))}
        </div>
    );
};

const CaredByMe = ({ showModal, setShowModal }) => {

    // ... existing useEffect to fetch posts details
    const [postDetails, setPostDetails] = useState([]);
    useEffect(() => {
        const fetchPostsDetails = async () => {
            const userId = getAuth().currentUser?.uid;
            if (userId) {
                const db = getDatabase();
                const likedPostsRef = ref(db, `users/${userId}/likedPosts`);
    
                const snapshot = await get(likedPostsRef);
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const postsPromises = Object.keys(data)
                        .filter(postId => data[postId] === true)
                        .map(async (postId) => {
                            const postSnapshot = await get(ref(db, `posts/${postId}`));
                            if (postSnapshot.exists()) {
                                return { id: postId, ...postSnapshot.val() };
                            }
                            return null;
                        });
    
                    const posts = await Promise.all(postsPromises);
                    setPostDetails(posts.filter(post => post !== null)); // Filter out null values
                } else {
                    console.log("No liked posts found.");
                    setPostDetails([]);
                }
            }
        };

        fetchPostsDetails();
    }, []);

    return (
        <>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Cared by me</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {postDetails.length > 0 ? (
                        postDetails.map((post, index) => (
                            <Card key={index} className="mb-3">
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    {/* Additional post details can be displayed here */}
                                </Card.Body>
                            </Card>
                        ))
                    ) : (
                        <p>You haven't liked any posts yet.</p>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
};


