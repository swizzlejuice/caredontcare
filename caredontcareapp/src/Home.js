import React, { Component } from 'react'; // Correctly import Component

import { Link } from 'react-router-dom';
import { Nav } from './Nav.js';
import { Card } from 'react-bootstrap';
import { getDatabase, ref, runTransaction , onValue, off} from "firebase/database";
import { getAuth } from "firebase/auth";



class CardOne extends React.Component {
    state = {
        showDiv: true
    }
    
    render() {
   
        const { showDiv } = this.state; // Destructure showDiv from state to use it in the JSX.
        const isLiked = this.props.likedPosts ? this.props.likedPosts['cardOnePostId'] : false;

        // Similarly, ensure likesCount is defined before using it
        const likesCount = this.props.likesCount || 0;

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
                            <Card.Text className="cared-by-num">{this.props.likesCount > 0 ? `Cared by ${this.props.likesCount} people` : 'Not cared yet'}</Card.Text>
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
        const { showDiv } = this.state; // Destructure showDiv from state to use it in the JSX.
        const isLiked = this.props.likedPosts ? this.props.likedPosts['cardTwoPostId'] : false;

        // Similarly, ensure likesCount is defined before using it
        const likesCount = this.props.likesCount || 0;
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
                            <Card.Text className="cared-by-num">{this.props.likesCount > 0 ? `Cared by ${this.props.likesCount} people` : 'Not cared yet'}</Card.Text>
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
        const { showDiv } = this.state; // Destructure showDiv from state to use it in the JSX.
        const isLiked = this.props.likedPosts ? this.props.likedPosts['cardThreePostId'] : false;

        // Similarly, ensure likesCount is defined before using it
        const likesCount = this.props.likesCount || 0;
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
                            <Card.Text className="cared-by-num">{this.props.likesCount > 0 ? `Cared by ${this.props.likesCount} people` : 'Not cared yet'}</Card.Text>
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
        const { showDiv } = this.state; // Destructure showDiv from state to use it in the JSX.
        const isLiked = this.props.likedPosts ? this.props.likedPosts['cardFourPostId'] : false;

        // Similarly, ensure likesCount is defined before using it
        const likesCount = this.props.likesCount || 0;

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
                            <Card.Text className="cared-by-num">{this.props.likesCount > 0 ? `Cared by ${this.props.likesCount} people` : 'Not cared yet'}</Card.Text>
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
        const { showDiv } = this.state; // Destructure showDiv from state to use it in the JSX.
        const isLiked = this.props.likedPosts ? this.props.likedPosts['cardFivePostId'] : false;

        // Similarly, ensure likesCount is defined before using it
        const likesCount = this.props.likesCount || 0;

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
                            <Card.Text className="cared-by-num">{this.props.likesCount > 0 ? `Cared by ${this.props.likesCount} people` : 'Not cared yet'}</Card.Text>
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
        const { showDiv } = this.state; // Destructure showDiv from state to use it in the JSX.
        const isLiked = this.props.likedPosts ? this.props.likedPosts['cardSixPostId'] : false;

        // Similarly, ensure likesCount is defined before using it
        const likesCount = this.props.likesCount || 0;

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
                            <Card.Text className="cared-by-num">{this.props.likesCount > 0 ? `Cared by ${this.props.likesCount} people` : 'Not cared yet'}</Card.Text>
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
            notification: '',
            userLikedPosts: {}, // This will hold whether the logged-in user has liked each post
            likesCounts: {}, // This will hold the likes count for each post
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
    
        const db = getDatabase();
        const userPostRef = ref(db, `users/${userId}/likedPosts/${postId}`);
        const postLikesRef = ref(db, `posts/${postId}/likesCount`);
    
        // Start a transaction on the user's liked post
        runTransaction(userPostRef, (currentValue) => {
            // If the post is not currently liked by the user, like it
            if (currentValue === null || currentValue === false) {
                // Start another transaction to increment the likesCount
                runTransaction(postLikesRef, (likesCount) => {
                    // If likesCount does not exist, initialize it to 1
                    return (likesCount || 0) + 1;
                });
    
                return true;
            } else {
                // Start another transaction to decrement the likesCount
                runTransaction(postLikesRef, (likesCount) => {
                    // If unliking the post, decrement the likesCount
                    return (likesCount || 1) - 1;
                });
    
                return false;
            }
        }).then(() => {
            this.showNotification("Post care status updated.");
            // Now we update the local state to reflect the change
            this.setState(prevState => ({
                likedPosts: {
                    ...prevState.likedPosts,
                    [postId]: !prevState.likedPosts[postId]
                }
            }));
        }).catch((error) => {
            console.error("Error updating care status:", error);
            this.showNotification("Failed to update care status.");
        });
    }

    componentDidMount() {
        const db = getDatabase();
        const auth = getAuth();
        const userId = auth.currentUser?.uid; // Get the currently logged in user's ID
    
        if (userId) {
            // Listen for changes in the liked posts for the logged-in user
            const userLikesRef = ref(db, `users/${userId}/likedPosts`);
            onValue(userLikesRef, (snapshot) => {
                const userLikesData = snapshot.val() || {}; // Get the value or an empty object if null
                // Set the state for userLikedPosts with the fetched data
                this.setState({ userLikedPosts: userLikesData });
            });
        }
    
        // Listen for changes in the likes count for all posts
        const postsRef = ref(db, 'posts');
        onValue(postsRef, (snapshot) => {
            const postsData = snapshot.val();
            const newLikedPosts = {};
            const newLikesCounts = {};

            for (let postId in postsData) {
                newLikesCounts[postId] = postsData[postId].likesCount ?? 0;
                newLikedPosts[postId] = false; // Initialize as not liked
            }

            // Update the state with the new data
            this.setState({ likedPosts: newLikedPosts, likesCounts: newLikesCounts });
        });
    }

    componentWillUnmount() {
        // Clean up listeners
        const db = getDatabase();
        const auth = getAuth();
        const userId = auth.currentUser?.uid;
        if (userId) {
            const userLikesRef = ref(db, `users/${userId}/likedPosts`);
            off(userLikesRef); // Detach the listener for the user's liked posts
        }
        const postsRef = ref(db, 'posts');
        off(postsRef); // Detach the listener for the like counts of all posts
    }



    render() {
        const { notification, userLikedPosts, likesCounts } = this.state;

        return (
            <div>
                <Nav />
                {notification && (
                    <div style={{ position: 'fixed', bottom: 20, right: 20, backgroundColor: 'lightgreen', padding: 10, borderRadius: 5 }}>
                        {notification}
                    </div>
                )}
                <CardOne handleCare={this.handleCare} showNotification={this.showNotification} likedPosts={userLikedPosts} likesCount={likesCounts['cardOnePostId'] || 0} />
                <CardTwo handleCare={this.handleCare} showNotification={this.showNotification} likedPosts={userLikedPosts} likesCount={likesCounts['cardTwoPostId'] || 0} />
                <CardThree handleCare={this.handleCare} showNotification={this.showNotification} likedPosts={userLikedPosts} likesCount={likesCounts['cardThreePostId'] || 0} />
                <CardFour handleCare={this.handleCare} showNotification={this.showNotification} likedPosts={userLikedPosts} likesCount={likesCounts['cardFourPostId'] || 0} />
                <CardFive handleCare={this.handleCare} showNotification={this.showNotification} likedPosts={userLikedPosts} likesCount={likesCounts['cardFivePostId'] || 0} />
                <CardSix handleCare={this.handleCare} showNotification={this.showNotification} likedPosts={userLikedPosts} likesCount={likesCounts['cardSixPostId'] || 0} />
                <div className="home-padding"></div>
            </div>
        );
    }
}

