import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './Nav.js';
import { Card } from 'react-bootstrap';

class CardOne extends React.Component {
    state = {
        showDiv: true
    }
    render() {
        const { showDiv } = this.state
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
                    <button className="c-btn">Care</button>
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
        return (
            <div>
                { showDiv && (
                    <div>
                    <Card className="home-card" style={{ width: '21rem'}}>
                        <Card.Body className="cards-text">
                        <Card.Img className="card-img" variant="top" src="img/image2.png" />
                            <Card.Title className="card-title">Washington's Kalen DeBoer named AP Coach of the Year</Card.Title>
                            <Card.Subtitle className="card-sub">ESPN Sports | 12/19/2023</Card.Subtitle>
                            <Card.Text className="card-desc">
                            SEATTLE -- When Kalen DeBoer landed the job at Washington two years ago, it seemed like an unheralded transaction.
                            It has turned out to be a shrewd decision by the Huskies. One might say it's been perfect.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <button className="dc-btn" onClick={() => this.setState({ showDiv: !showDiv })}>
                        { showDiv ? "Don't Care" : "Undo" }
                    </button>
                    <Link to="/kalen-deboer-forum"><button className="c-btn">Care</button></Link>
                    </div>
                )}
                <div className="home-padding"></div>
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
      </div>
    );
  }
