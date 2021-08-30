
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './post.scss';
import PostActionProps from './PostActionProps';

export default function Post(props: PostActionProps){

    var [up, upVote] = useState(props.up);
    var [down, downVote] = useState(props.down);
    var [comments, comment] = useState(props.comments);

    return(
        <Container fluid="md">
            {/* Heading */}
            <Row className="justify-content-md-center">
                <Col className='heading'>
                    Airtel stock price will hit new high
                </Col>
            </Row>
            {/* Description */}
            <Row>
                <Col>
                    The company is growing with incremental pace, They have new ideas and keeping up with the new trendes of the technology.
                    In mobile network the company is adding considerable amount of new custome and they are shifting the focus from 
                    adding new customer to retaining existing by improving the services.
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <div className='action-bar'>
                        <div>
                            <div style={{color:"green"}}>{up}</div>
                            <Button variant="outline-light"
                                    className='vote-up'
                                    onClick={() => upVote(up+1)}
                            />
                        </div>
                        <div>
                            <div style={{color:"red"}}>{down}</div> 
                            <Button variant="outline-light" 
                                    className='vote-down'
                                    onClick={()=> downVote(down+1)}/>
                        </div>
                        <div>
                            <div>{comments}</div> 
                            <Button variant="outline-light" 
                                    className='vote-comment'
                                    onClick={()=>comment(comments+1)}/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    );
}