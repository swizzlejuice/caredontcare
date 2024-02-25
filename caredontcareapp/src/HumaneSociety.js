import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './Nav.js';
import { Card } from 'react-bootstrap';

export function HumaneSociety() {
    return (
        <body>
            <div>
                <Nav />
                <Link to="/home"><img className="back-icon" src="img/back-button.png" alt="back icon"/></Link>
                {/* <a href="https://www.flaticon.com/free-icons/left-arrow" title="left arrow icons">Left arrow icons created by Freepik - Flaticon</a> */}
                <Card className="post-card" style={{ width: '21rem'}}>
                    <Card.Body className="cards-text">
                        <Card.Title className="card-title">Seattle Humane Society struggles with pet food shortages</Card.Title>
                        <Card.Subtitle className="card-sub">KIRO 7 News | 12/17/2023</Card.Subtitle>
                        <Card.Text className="card-desc">
                        SEATTLE, Wash. — The Seattle Humane Society is in a desperate situation. Delays in receiving food orders have left them struggling to meet the growing demand. 
                        The shelves are bare, and the need is urgent. Cans of wet cat and dog food and dry cat food are in short supply.
                        The not-for-profit animal shelter is dedicated to saving lives, reuniting families, and ensuring that pets remain with those who love them. 
                        The Pet Food Bank & Supplies program at Seattle Humane collects and distributes donated pet food to families in need throughout the region. Volunteers deliver nearly 82,000 meals to pet owners relying on this essential service each month. Families and food banks alike depend on this lifeline to keep their beloved pets fed and healthy. 
                        Despite the challenges, Seattle Humane continues to serve over 900 clients who depend on their assistance. Families facing financial hardships, seniors, and others rely on this program to ensure their pets don’t go hungry. The society strives to provide both dry and wet food, litter, and hygiene items while supplies last. 
                        Check out KIRO 7′s previous coverage of the Seattle Humane Society.<br></br><br></br>
                        How Can You Help?<br></br>
                        •	Donate: Generous community donations sustain the Pet Food Bank. You can drop off pet food and supplies at the Seattle Humane Pet Food Bank located at 13212 SE Eastgate Way in Bellevue, WA. Donations are accepted without an appointment. <br></br><br></br>
                        •	Red Barrel Partners: Look for Red Barrels at partner locations where you can also drop off donations.<br></br><br></br>
                        •	Amazon Wish List: Contribute online through the society’s Amazon Wish List.<br></br><br></br>
                        •	Run a Drive: Consider organizing a pet food and supply drive to support this critical cause.<br></br><br></br>
                        Seattle Humane Society’s mission is to complete families, save lives, and keep pets with those who cherish them.<br></br>
                        <br></br>This story was originally posted by MyNorthwest.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div className="home-padding"></div>
            </div>
        </body>
    );
}
