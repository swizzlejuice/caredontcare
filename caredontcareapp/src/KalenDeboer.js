import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './Nav.js';
import { Card } from 'react-bootstrap';

export function KalenDeboer() {
    return (
        <body>
            <div>
                <Nav />
                <Link to="/home"><img className="back-icon" src="img/back-button.png" alt="back icon"/></Link>
                {/* <a href="https://www.flaticon.com/free-icons/left-arrow" title="left arrow icons">Left arrow icons created by Freepik - Flaticon</a> */}
                <Card className="post-card" style={{ width: '21rem'}}>
                    <Card.Body className="cards-text">
                        <Card.Title className="card-title">Washington's Kalen DeBoer named AP Coach of the Year</Card.Title>
                        <Card.Subtitle className="card-sub">ESPN Sports | 12/19/2023</Card.Subtitle>
                        <Card.Text className="card-desc">
                        SEATTLE -- When Kalen DeBoer landed the job at Washington two years ago, it seemed like an unheralded transaction.
                        It has turned out to be a shrewd decision by the Huskies. One might say it's been perfect. 
                        DeBoer was named the Associated Press Coach of the Year on Tuesday after leading the Huskies to a 13-0 record, the Pac-12 championship and a spot in the College Football Playoff in just his second year in charge at Washington. The Huskies will face Texas in the Allstate Sugar Bowl on Jan. 1 with a spot in the CFP championship game on the line. 
                        In his two seasons, the Huskies are 23-2, leaving behind the bitter memory of a 4-8 record in 2021 that led to a coaching change and brought DeBoer to Washington. <br></br><br></br>
                        "It's all about the people around me. This is a team award," DeBoer said. "When you win -- I tell the players this -- you win football games, you're going to get recognized and more awards are going to get shared. I'm fortunate enough to kind of be the figurehead of our team and receive these cool awards. Just really blessed."
                        DeBoer received 30 of 52 first-place votes and had 113 points overall from AP Top 25 poll voters to easily outpace Florida State's Mike Norvell (57 points). Missouri's Eli Drinkwitz (38) and Arizona's Jedd Fisch (28) were the only other coaches to receive multiple first-place votes.
                        <br></br><br></br>DeBoer is the first Washington coach to be named the AP Coach of the Year and just the third Pac-12 coach to win the award in the last 25 years, joining Mike MacIntyre (Colorado, 2016) and Chip Kelly (Oregon, 2010).<br></br><br></br>
                        "I think when dealing with the team, I think I'm the same. I think there's job responsibilities that come along with this level that you continue to adjust to and learn from -- the good, bad and ugly, whatever it was that had happened," DeBoer said. "But I think when it comes to building the team, the foundation of it is the same, the same priorities."
                        DeBoer is in just his fourth season as a head coach in the Football Bowl Subdivision. He was 67-3 at his alma mater, Sioux Falls, from 2005 to '09 and won three NAIA championships. At Fresno State, he went 12-6 in two seasons, including 9-3 the final year.
                        When the Washington job came open, DeBoer took the challenge of guiding a Power 5 program. But he was inheriting a team that had gone through a tumultuous season that included the firing of Coach Jimmy Lake with two games still on the schedule.
                        While DeBoer won at nearly every stop, he still needed to prove to his new team that his methods would work.
                        <br></br><br></br>"We were open ears to what he had to say, and he was so persistent in his genuineness and his commitment to take this program to the top that at the end of the day, it was unstoppable to be able to trust him," first-team AP All-America wide receiver Rome Odunze said.
                        <br></br><br></br>While it certainly helped to have talented players such as Odunze and Heisman Trophy runner-up Michael Penix Jr., a significant amount of Washington's success this season came because DeBoer and the Huskies were great in close games.
                        Each of Washington's final eight games was decided by 10 points or fewer, and all of them were in question in the fourth quarter. Washington's final four wins over Utah, Oregon State, Washington State and Oregon were decided by a total of 15 points.
                        That speaks to coaching. And belief.<br></br><br></br>
                        "We've gotten here because he's carried through with everything he said he was going to do with all his effort," Odunze said.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div>
                <Card className="comment-card" style={{ width: '21rem'}}>
                    <Card.Body className="cards-text">
                        <Card.Title className="card-title">3 comments</Card.Title>
                        <Card.Text className="card-desc">
                            <Card.Body className="write-comment">
                                <Card.Title className="comt">Write something...</Card.Title>
                            </Card.Body>
                            <Card.Body className="comments-card">
                                <Card.Title className="comment-user">@athenale</Card.Title>
                                <Card.Text className="comment-desc"> woohoo!
                                </Card.Text>
                                <Card.Subtitle className="reply">Reply</Card.Subtitle>
                            </Card.Body>
                            <Card.Body className="comments-card">
                                <Card.Title className="comment-user">@shellyzhao</Card.Title>
                                <Card.Text className="comment-desc"> 🙌
                                </Card.Text>
                                <Card.Subtitle className="reply">Reply</Card.Subtitle>
                            </Card.Body>
                            <Card.Body className="comments-card">
                                <Card.Title className="comment-user">@stetsai</Card.Title>
                                <Card.Text className="comment-desc"> go dawgs!!!
                                </Card.Text>
                                <Card.Subtitle className="reply">Reply</Card.Subtitle>
                            </Card.Body>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div className="home-padding"></div>
            </div>
        </body>
    );
}
