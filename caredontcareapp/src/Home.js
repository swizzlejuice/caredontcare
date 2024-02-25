import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './Nav.js';
import { Card } from 'react-bootstrap';
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";

class CardOne extends React.Component {
    state = {
        showDiv: true
    }

    handleCare = (postId) => {
        const userId = getAuth().currentUser?.uid; // Use optional chaining in case currentUser is null
        if (!userId) {
          alert("Please log in to care about posts.");
          return;
        }
        const db = getDatabase();
        set(ref(db, `users/${userId}/likedPosts/${postId}`), true)
          .then(() => alert("You cared about this post."))
          .catch((error) => console.error("Error caring for post:", error));
    };
    
    render() {
        const { showDiv } = this.state;
        // Assuming a static postId for demonstration; replace with actual dynamic postId in a real app
        const postId = "cardOnePostId";
        
        return (
            <div>
                { showDiv && (
                    <div>
                    <Card className="home-card" style={{ width: '21rem'}}>
                        <Card.Body className="cards-text">
                        <Card.Img className="card-img" variant="top" src="img/image1.png" />
                            <Card.Title className="card-title">Seattle shelter for Native people set to close as U.S. hits highest reported level of homelessness</Card.Title>
                            <Card.Subtitle className="card-sub">NBC News | 12/22/2023</Card.Subtitle>
                            <Card.Text className="card-desc">
                            Homelessness in the U.S. is at a record high, according to new data released by the federal government this week. 
                            And as in previous years, Indigenous people are overrepresented among Americans experiencing homelessness...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <button className="dc-btn" onClick={() => this.setState({ showDiv: !showDiv })}>
                        { showDiv ? "Don't Care" : "Undo" }
                    </button>
                    {/* Connect this button to the handleCare function */}
                    <button className="c-btn" onClick={() => this.handleCare(postId)}>Care</button>
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

    handleCare = (postId) => {
        const userId = getAuth().currentUser?.uid;
        if (!userId) {
          alert("Please log in to care about posts.");
          return;
        }
        const db = getDatabase();
        set(ref(db, `users/${userId}/likedPosts/${postId}`), true)
          .then(() => alert("You cared about this post."))
          .catch((error) => console.error("Error caring for post:", error));
    };

    
    render() {
        const { showDiv } = this.state
        const postId = "cardTwoPostId";
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
                        </Card.Body>
                    </Card></Link>
                    <button className="dc-btn" onClick={() => this.setState({ showDiv: !showDiv })}>
                        { showDiv ? "Don't Care" : "Undo" }
                    </button>
                    {/* <Link to="/kalen-deboer-forum"><button className="c-btn">Care</button></Link> */}
                    <button className="c-btn" onClick={() => this.handleCare(postId)}>Care</button>
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

    handleCare = (postId) => {
        const userId = getAuth().currentUser?.uid;
        if (!userId) {
          alert("Please log in to care about posts.");
          return;
        }
        const db = getDatabase();
        set(ref(db, `users/${userId}/likedPosts/${postId}`), true)
          .then(() => alert("You cared about this post."))
          .catch((error) => console.error("Error caring for post:", error));
    };

    
    render() {
        const { showDiv } = this.state
        const postId = "cardThreePostId";
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
                        </Card.Body>
                    </Card></Link>
                    <button className="dc-btn" onClick={() => this.setState({ showDiv: !showDiv })}>
                        { showDiv ? "Don't Care" : "Undo" }
                    </button>
                    <button className="c-btn" onClick={() => this.handleCare(postId)}>Care</button>
                    </div>
                )}
            </div>  
        )
    }
}

export function Home() {
    return (
      <div>
        <Nav />
        <CardOne />
        <CardTwo />
        <CardThree />
        <div className="home-padding"></div>
      </div>
    );
  }
