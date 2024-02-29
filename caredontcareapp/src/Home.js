import React, { Component } from 'react'; // Correctly import Component

import { Link } from 'react-router-dom';
import { Nav } from './Nav.js';
import { Card } from 'react-bootstrap';
import { getDatabase, ref, runTransaction } from "firebase/database";
import { getAuth } from "firebase/auth";


class CardOne extends React.Component {
    state = {
        showDiv: true
    }
    
    render() {
        const { showDiv } = this.state;
        const isLiked = this.props.likedPosts.cardOnePostId;
        
        return (
            <div>
                { showDiv && (
                    <div>
                    <Card className="home-card" style={{ width: '21rem'}}>
                        <Card.Body className="cards-text">
                        <Card.Img className="three-card-img" variant="top" src="img/here.jpg" />
                            <Card.Title className="card-title">Student lawsuit against HERE Seattle reaches preliminary settlement</Card.Title>
                            <Card.Subtitle className="card-sub">The Daily | 02/26/2024</Card.Subtitle>
                            <Card.Text className="card-desc">
                            UW student Amisha Gupta recently reached a preliminary settlement for at least $400,000 with the company that owns U-District apartment complex HERE Seattle, following a class action lawsuit Gupta filed in February 2023. 
                            </Card.Text>
                            <Card.Text className="cared-by-num">Cared by 5 people</Card.Text>
                        </Card.Body>
                    </Card>
                    <button className="dc-btn" onClick={() => this.setState({ showDiv: !showDiv })}>
                        { showDiv ? "Don't Care" : "Undo" }
                    </button>
                    {/* Connect this button to the handleCare function */}
                    <button className="c-btn" onClick={() => this.props.handleCare("cardOnePostId")}>{isLiked ? 'Cared' : 'Care'} </button>
                    </div>
                )}
            </div>  
        )
    }
}

class CardTwo extends React.Component {
    state = {
        showDiv: true
    }
    
    render() {
        const { showDiv } = this.state
        const isLiked = this.props.likedPosts.cardTwoPostId;


        return (
            <div>
                { showDiv && (
                    <div>
                    <Link to="/kalen-deboer-post"><Card className="home-card" style={{ width: '21rem'}}>
                        <Card.Body className="cards-text">
                        <Card.Img className="card-img" variant="top" src="img/image2.png" />
                            <Card.Title className="card-title">Washington's Kalen DeBoer named AP Coach of the Year</Card.Title>
                            <Card.Subtitle className="card-sub">ESPN Sports | 12/19/2023</Card.Subtitle>
                            <Card.Text className="card-desc">
                            SEATTLE -- When Kalen DeBoer landed the job at Washington two years ago, it seemed like an unheralded transaction.
                            It has turned out to be a shrewd decision by the Huskies. One might say it's been perfect.
                            </Card.Text>
                            <Card.Text className="cared-by-num">Cared by 5 people</Card.Text>
                        </Card.Body>
                    </Card></Link>
                    <button className="dc-btn" onClick={() => this.setState({ showDiv: !showDiv })}>
                        { showDiv ? "Don't Care" : "Undo" }
                    </button>
                    {/* <Link to="/kalen-deboer-forum"><button className="c-btn">Care</button></Link> */}
                    <button className="c-btn" onClick={() => this.props.handleCare("cardTwoPostId")}>{isLiked ? 'Cared' : 'Care'} </button>


                    </div>
                )}
            </div>  
        )
    }
}

class CardThree extends React.Component {
    state = {
        showDiv: true
    }

    render() {
        const { showDiv } = this.state
        const isLiked = this.props.likedPosts.cardThreePostId;

        return (
            <div>
                { showDiv && (
                    <div>
                    <Link to="/humane-society-post"><Card className="home-card" style={{ width: '21rem'}}>
                        <Card.Body className="cards-text">
                        <Card.Img className="three-card-img" variant="top" src="img/hsimage.png" />
                            <Card.Title className="card-title">Seattle Humane Society struggles with pet food shortages</Card.Title>
                            <Card.Subtitle className="card-sub">KIRO 7 News | 12/17/2023</Card.Subtitle>
                            <Card.Text className="card-desc">
                            SEATTLE, Wash. — The Seattle Humane Society is in a desperate situation. 
                            Delays in receiving food orders have left them struggling to meet the growing demand. 
                            The shelves are bare, and the need is urgent. 
                            </Card.Text>
                            <Card.Text className="cared-by-num">Cared by 5 people</Card.Text>
                        </Card.Body>
                    </Card></Link>
                    <button className="dc-btn" onClick={() => this.setState({ showDiv: !showDiv })}>
                        { showDiv ? "Don't Care" : "Undo" }
                    </button>

                    <button className="c-btn" onClick={() => this.props.handleCare("cardThreePostId")}>{isLiked ? 'Cared' : 'Care'} </button>

                    </div>
                )}
            </div>  
        )
    }
}

class CardFour extends React.Component {
    state = {
        showDiv: true
    }

    render() {
        const { showDiv } = this.state
        const isLiked = this.props.likedPosts.cardFourPostId;

        return (
            <div>
                { showDiv && (
                    <div>
                    <Card className="home-card" style={{ width: '21rem'}}>
                        <Card.Body className="cards-text">
                        <Card.Img className="third-card-img" variant="top" src="img/uw.jpg" />
                            <Card.Title className="card-title">UW goes back to school on free speech</Card.Title>
                            <Card.Subtitle className="card-sub">The Seattle Times | 11/04/2023</Card.Subtitle>
                            <Card.Text className="card-desc">
                            It may sound strange, but there’s a sigh of relief over at the University of Washington that the most read story at the UW Daily newspaper this last week has been “Confessions of...
                            </Card.Text>
                            <Card.Text className="cared-by-num">Cared by 5 people</Card.Text>
                        </Card.Body>
                    </Card>
                    <button className="dc-btn" onClick={() => this.setState({ showDiv: !showDiv })}>
                        { showDiv ? "Don't Care" : "Undo" }
                    </button>

                    <button className="c-btn" onClick={() => this.props.handleCare("cardFourPostId")}>{isLiked ? 'Cared' : 'Care'} </button>

                    </div>
                )}
            </div>  
        )
    }
}

class CardFive extends React.Component {
    state = {
        showDiv: true
    }

    render() {
        const { showDiv } = this.state
        const isLiked = this.props.likedPosts.cardFivePostId;

        return (
            <div>
                { showDiv && (
                    <div>
                    <Card className="home-card" style={{ width: '21rem'}}>
                        <Card.Body className="cards-text">
                        <Card.Img className="three-card-img" variant="top" src="img/ai.png" />
                            <Card.Title className="card-title">Students investigate how artificial intelligence perpetuates biases</Card.Title>
                            <Card.Subtitle className="card-sub">UW iSchool | 10/30/2023</Card.Subtitle>
                            <Card.Text className="card-desc">
                            Many people believe that technology is just a tool, neither good nor bad. “That's an 
                            old but wrong story that technology is neutral,” said Damian Hodel, a second-year Ph.D. student at the University of Washington’s Information School.
                            </Card.Text>
                            <Card.Text className="cared-by-num">Cared by 5 people</Card.Text>
                        </Card.Body>
                    </Card>
                    <button className="dc-btn" onClick={() => this.setState({ showDiv: !showDiv })}>
                        { showDiv ? "Don't Care" : "Undo" }
                    </button>

                    <button className="c-btn" onClick={() => this.props.handleCare("cardFivePostId")}>{isLiked ? 'Cared' : 'Care'} </button>

                    </div>
                )}
            </div>  
        )
    }
}

class CardSix extends React.Component {
    state = {
        showDiv: true
    }

    render() {
        const { showDiv } = this.state
        const isLiked = this.props.likedPosts.cardSixPostId;

        return (
            <div>
                { showDiv && (
                    <div>
                    <Card className="home-card" style={{ width: '21rem'}}>
                        <Card.Body className="cards-text">
                        <Card.Img className="three-card-img" variant="top" src="img/slides.jpg" />
                            <Card.Title className="card-title">A Google Slides extension can make presentation software more accessible for blind users</Card.Title>
                            <Card.Subtitle className="card-sub">UW News | 10/30/2023</Card.Subtitle>
                            <Card.Text className="card-desc">
                            Screen readers, which convert digital text to audio, can make computers more accessible to many disabled users — 
                            including those who are blind, low vision or dyslexic. Yet slideshow software, such as Microsoft PowerPoint and Google Slides...
                            </Card.Text>
                            <Card.Text className="cared-by-num">Cared by 5 people</Card.Text>
                        </Card.Body>
                    </Card>
                    <button className="dc-btn" onClick={() => this.setState({ showDiv: !showDiv })}>
                        { showDiv ? "Don't Care" : "Undo" }
                    </button>

                    <button className="c-btn" onClick={() => this.props.handleCare("cardSixPostId")}>{isLiked ? 'Cared' : 'Care'} </button>

                    </div>
                )}
            </div>  
        )
    }
}

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notification: '', // State to hold the notification message
            likedPosts: {
                cardOnePostId: false,
                cardTwoPostId: false,
                cardThreePostId: false,
                cardFourPostId: false,
                cardFivePostId: false,
                cardSixPostId: false
              }, // Initialize your local likedPosts state here  
        };
        this.handleCare = this.handleCare.bind(this);
    }

    // Method to show notification
    showNotification = (message) => {
        this.setState({ notification: message });
        setTimeout(() => this.setState({ notification: '' }), 3000); // Clear the notification after 3 seconds
    }

    handleCare = (postId) => {
        const userId = getAuth().currentUser?.uid;
        if (!userId) {
            this.showNotification("Please log in to care about posts.");
            return;
        }

        this.setState(prevState => ({
            likedPosts: {
              ...prevState.likedPosts,
              [postId]: !prevState.likedPosts[postId], // Toggle the liked status for the specific postId
            }
        }));

        const db = getDatabase();
        const postRef = ref(db, `users/${userId}/likedPosts/${postId}`);

        runTransaction(postRef, (currentValue) => {
            if (currentValue === null || currentValue === false) {
                return true; // If it's not set or false, like the post
            } else {
                return false; // If it's true, unlike the post
            }
        }).then(() => {
            this.showNotification("Post care status updated.");
        }).catch((error) => {
            console.error("Error updating care status:", error);
            this.showNotification("Failed to update care status.");
        });
    }

    render() {
        const { notification, likedPosts } = this.state;

        return (
            <div>
                <Nav />
                {notification && (
                    <div style={{ position: 'fixed', bottom: 20, right: 20, backgroundColor: 'lightgreen', padding: 10, borderRadius: 5 }}>
                        {notification}
                    </div>
                )}
                <CardOne handleCare={this.handleCare} showNotification={this.showNotification} likedPosts={likedPosts} />
                <CardTwo handleCare={this.handleCare} showNotification={this.showNotification} likedPosts={likedPosts}/>
                <CardThree handleCare={this.handleCare} showNotification={this.showNotification} likedPosts={likedPosts}/>
                <CardFour handleCare={this.handleCare} showNotification={this.showNotification} likedPosts={likedPosts}/>
                <CardFive handleCare={this.handleCare} showNotification={this.showNotification} likedPosts={likedPosts}/>
                <CardSix handleCare={this.handleCare} showNotification={this.showNotification} likedPosts={likedPosts}/>
                <div className="home-padding"></div>
            </div>
        );
    }
}