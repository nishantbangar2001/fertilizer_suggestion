import akhilesh from "../Images/Akhilesh.png";
import nishant from "../Images/nishant.jpg";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ApplicationContext } from "../context/context";
import { useContext } from "react";

export function AboutUs(){
    const contextValue = useContext(ApplicationContext);
    console.log(contextValue);
    return(
    <Container className="mt-5">
        <h1>About Us</h1>
        <Row>
            <Col>
            <Card style={{ width: '18rem', backgroundColor: "#393646" }}>
                <Card.Img variant="top" src={akhilesh} />
                    <Card.Body className="text-light">
                        <Card.Title>Akhilesh Awachat</Card.Title>
                            <Card.Text>
                                   CDAC KHARGHAR<br></br>
                                   Soil Sage
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem', backgroundColor: "#393646" }}>
                <Card.Img variant="top" src={nishant} />
                    <Card.Body className="text-light">
                        <Card.Title>Nishant Bangar</Card.Title>
                            <Card.Text>
                            CDAC KHARGHAR<br></br>
                                   Soil Sage
                            </Card.Text>
                            {/* <Button  variant="primary"><a style={{color:'white'}} href="https://www.google.co.in">visit LinkedIn</a></Button> */}
                    </Card.Body>
            </Card>
            </Col>
           
        </Row>
    </Container>
    );
}