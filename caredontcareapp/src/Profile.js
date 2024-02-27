import { Nav } from './Nav.js';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { getDatabase, ref, get, onValue } from "firebase/database";
import { getAuth } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import './index.css'; 

export function ProfilePage() {
    const [showModal, setShowModal] = useState(false); // Add state to control the modal visibility
    const [postDetails, setPostDetails] = useState([]); // State to hold the cared posts
    
    useEffect(() => {
        const fetchCaredPosts = async () => {
            const userId = getAuth().currentUser?.uid;
            if (!userId) {
                console.log('No user is currently logged in.');
                return;
            }
            const db = getDatabase();
            const likedPostsRef = ref(db, `users/${userId}/likedPosts`);
            const likedPostsSnapshot = await get(likedPostsRef);
    
            // Debugging logs
            console.log('Liked Posts Snapshot Data:', likedPostsSnapshot.val());
    
            if (likedPostsSnapshot.exists()) {
                const likedPostsIds = Object.keys(likedPostsSnapshot.val()).filter(key => likedPostsSnapshot.val()[key] === true);
    
                // Debugging logs
                console.log('Filtered Liked Posts IDs:', likedPostsIds);
    
                const postsPromises = likedPostsIds.map(async (postId) => {
                    const postRef = ref(db, `posts/${postId}`);
                    const postSnapshot = await get(postRef);
    
                    // Debugging logs
                    console.log(`Data for post ${postId}:`, postSnapshot.val());
    
                    if (postSnapshot.exists()) {
                        return { id: postId, ...postSnapshot.val() };
                    }
                    return null;
                });
    
                const posts = (await Promise.all(postsPromises)).filter(post => post !== null);
    
                // Debugging logs
                console.log('Final posts array:', posts);
    
                setPostDetails(posts);
            } else {
                console.log("No cared posts found.");
                setPostDetails([]);
            }
        };
    
        fetchCaredPosts();
        // If you add any dependencies here, make sure they are stable and won't cause unnecessary re-renders.
    }, []);

    return (
        <>
            <Nav />
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <UserInfo />
                        <Button className="modal-btn" variant="primary" onClick={() => setShowModal(true)}>Show Cared Posts</Button>
                        <CaredByMe showModal={showModal} setShowModal={setShowModal} postDetails={postDetails}/>
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

    return (
        <div className="text-center my-4">
            {/* The Image component has been removed */}
            <img className="prof-img" src="img/woman.png" alt="profile icon"/>
            <h3 className="username">{username}</h3> {/* Removed the "@" since it's already part of the username */}
            {/* <p className="bio">{bio}</p> */}
            {/* <Button variant="primary" className="edit-profile-button">Edit Profile</Button> */}
        </div>
    );
};

// const TopicsOfInterest = () => {
//     // Example topics
//     const topics = ["Sports", "Local News", "Neuroscience"];

//     return (
//         <div className="my-4">
//             {topics.map((topic, index) => (
//                 <Button key={index} variant="outline-secondary" className="m-1">
//                     {topic}
//                 </Button>
//             ))}
//         </div>
//     );
// };

const CaredByMe = ({ showModal, setShowModal, postDetails }) => {
    return (
        <>
            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                <Modal.Header closeButton className='cared-by-me-btn'>
                    {/* <Modal.Title>Cared by me</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    {postDetails.length > 0 ? (
                        <div className="cared-posts-grid">
                            {postDetails.map((post, index) => (
                                <Card key={index} className="cared-post-card" style={{ width: '18rem', height: '16rem'}}>
                                    <Card.Img variant="top" src={post.imageUrl || 'img/default-image.png'} />
                                    <Card.Body>
                                        <Card.Title>{post.title}</Card.Title>
                                        <Card.Text>{post.description}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Cared on {post.subtitle.split(' | ')[1]}</small>
                                    </Card.Footer>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center">You haven't liked any posts yet.</p>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
};