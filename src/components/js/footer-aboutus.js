import React from 'react';
import { Container, Row, Col, Card, CardBody, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap';


export default class Footeraboutus extends React.Component {
  
  render() {
    return (
      <React.Fragment>
      <Container fluid style={{background: '#000000b3'}}>
        <Container>
          <Row style={{height: '25px'}}/>
          <Row>
            <Col xs="3">
              <Card>
                <CardBody>
                  <CardTitle>Useful links</CardTitle>
                  <CardText>link1</CardText>
                  <CardText>link2</CardText>
                  <CardText>link3</CardText>
                  <CardText>link4</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs={{ size: 4, order: 2, offset: 1}} >
              <Card>
                <CardBody>
                  <CardTitle>Follow us</CardTitle>
                  <CardText>Facebook</CardText>
                  <CardText>Instagram</CardText>
                  <CardText>Twitter</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs={{ size: 3, offset: 1}}>
              <Card>
                <CardBody>
                  <CardTitle>Contact info</CardTitle>
                  <CardSubtitle>ASDFEFXCDFVFD,</CardSubtitle>
                  <CardText>afadfd,adfafa,
                    afasdf,adsfvv-23203
                  </CardText>
                  <Button>Contact us</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row style={{height: '25px'}}/>
        </Container>
      </Container>
       <footer style={{background: "#778899"}}>
        <Container fluid style={{background: '#483d8b', color: '#e6e6fa !important'}}>
          <span className="text-muted">copyright to Ashish Nautiyal</span>
        </Container>
       </footer>
      </React.Fragment>
    )
  }
}
