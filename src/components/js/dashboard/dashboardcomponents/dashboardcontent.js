import React, {Component} from 'react';
import $ from 'jquery';
import Viewmap from './viewmap';

import{
    Nav,
    Container,
    Card,
    CardDeck,
    CardHeader,
    CardTitle,
    CardBody, 
    CardText,
    CardLink,
    CardFooter,
    Button
} from 'reactstrap';

import{
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
      src: 'https://source.unsplash.com/random/1320x320',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: 'https://source.unsplash.com/random/1321x320',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: 'https://source.unsplash.com/random/1322x320',
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];

class Dashboardcontent extends Component {
    constructor(props) {
        super(props);
        this.mapState = false;
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.mapStates = this.mapStates.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }
    
      mapStates(state) {
          this.setState({
              mapState: !this.state.mapState
          })
      }

      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
    

    toggle() {
        $(document).ready(function () {

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        
        });
    }

    render() {
        const { activeIndex } = this.state;
        const slides = items.map((item) => {
            return (
              <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={item.src}
              >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
              </CarouselItem>
            );
          });
      
          return (
            <>
                 <div id="content">
                    <Nav className="navbar navbar-expand-lg navbar-light bg-light"> 
                    {/* <Navbar color="" light expand="md" style={{background: "tomato"}}></Navbar> */}
                        <Container>
                            <Button color="info" active type="button" id="sidebarCollapse" onClick={this.toggle}>
                                <i className="fas fa-align-left"></i>
                                <span>Toggle Sidebar</span>
                            </Button>
                        </Container>
                    </Nav>
                    <Container>
                        <h2>Found Items</h2>
                       {/*  <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel> */}
                    </Container>
                    <Container style={{display:'flex'}}>
                        <CardDeck>
                        <Card sm='6' body outline color='success' className='text-center'>
                            <CardHeader>
                                <CardTitle>Canon Camera</CardTitle>
                            </CardHeader>
                            <img src="https://source.unsplash.com/random/229x221"></img>
                            <CardBody>
                                <CardText>Camera found on 123 Street</CardText>
                                <CardLink href="#">View detail</CardLink>
                            </CardBody>
                            <CardFooter>
                                <Button color='info' block>View on Map</Button>
                            </CardFooter>
                        </Card>

                        <Card sm='6' body outline color='success' className='text-center'>
                            <CardHeader>
                                <CardTitle>Canon Camera</CardTitle>
                            </CardHeader>
                            <img src="https://source.unsplash.com/random/240x221"></img>
                            <CardBody>
                                <CardText>Camera found on 123 Street</CardText>
                                <CardLink href="#">View detail</CardLink>
                            </CardBody>
                            <CardFooter>
                                <Button color='info' block>View on Map</Button>
                            </CardFooter>
                        </Card>

                        <Card sm='6' body outline color='success' className='text-center'>
                            <CardHeader>
                                <CardTitle>Canon Camera</CardTitle>
                            </CardHeader>
                            <img src="https://source.unsplash.com/random/241x220"></img>
                            <CardBody>
                                <CardText>Camera found on 123 Street</CardText>
                                <CardLink href="#">View detail</CardLink>
                            </CardBody>
                            <CardFooter>
                                <Button color='info' block>View on Map</Button>
                            </CardFooter>
                        </Card>

                        <Card xm='6' body outline color='success' className='text-center'>
                            <CardHeader>
                                <CardTitle>Canon Camera</CardTitle>
                            </CardHeader>
                            <img src="https://source.unsplash.com/random/241x221"></img>
                            <CardBody>
                                <CardText>Camera found on 123 Street</CardText>
                                <CardLink href="#">View detail</CardLink>
                            </CardBody>
                            <CardFooter>
                                <Button onClick={this.mapStates} color='info' block>View on Map
                                    <Viewmap mapState={this.state.mapState} mapStates={this.mapStates}/>
                                </Button>
                            </CardFooter>
                        </Card>
                        </CardDeck>
                    </Container>
                </div>
            </>
          );
    }
}

export default Dashboardcontent;
