import React from 'react';
import $ from 'jquery';
import { 
    Button,
    Container,
    Row,
    Col
 } from 'reactstrap';
//import ReactDOM from 'react-dom';
import '../style/style-parallex.css';


class Howitworks extends React.Component {
    constructor(props) {
        super(props);
        this.para = this.para.bind(this);
        this.state = {};
    //    this.isInViewport = this.isInViewport(this);
    }
    componentDidMount = (props) => {
        this.para();
    //    this.isInViewport();
        document.addEventListener('scroll', this.isInViewport, true);
     //   this.setState(props.dataimgsrc)
    //    this.setState({dataimgsrc: 'https://source.unsplash.com/random/1920x1081'});
    }

    para() {
        $(document).ready(function(){

        // Populate images from data attributes.
        var scrolled = $(window).scrollTop()
        $('.parallax').each(function(index) {
            var imageSrc = $(this).data('image-src')
            var imageHeight = $(this).data('height')
            $(this).css('background-image','url(' + imageSrc + ')')
            $(this).css('height', imageHeight)
      
            // Adjust the background position.
            var initY = $(this).offset().top
            var height = $(this).height()
            var diff = scrolled - initY
            var ratio = Math.round((diff / height) * 100)
            $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
        })
      
        // Attach scroll event to window. Calculate the scroll ratio of each element
        // and change the image position with that ratio.
        // https://codepen.io/lemagus/pen/RWxEYz
        $(window).scroll(function() {
          var scrolled = $(window).scrollTop()
          $('.parallax').each(function(index, element) {
            var initY = $(this).offset().top
            var height = $(this).height()
           // var endY  = initY + $(this).height()
      
            // Check if the element is in the viewport.
        //    var visible = this.isInViewport(this)
        //    if(visible) {
              var diff = scrolled - initY
              var ratio = Math.round((diff / height) * 100)
              $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
        //    }
          })
        })
      })
    }
      // Check if the element is in the viewport.
      // http://www.hnldesign.nl/work/code/check-if-element-is-visible/
      /*  isInViewport(value) {
        // Am I visible? Height and Width are not explicitly necessary in visibility
        // detection, the bottom, right, top and left are the essential checks. If an
        // image is 0x0, it is technically not visible, so it should not be marked as
        // such. That is why either width or height have to be > 0.
        console.log("-------->" + value);
        let rect = ReactDOM.findDOMNode(this.refs['UniqueElementIdentifies']).getBoundingClientRect();
        console.log(rect);
        return (
          (rect.height > 0 || rect.width > 0) &&
          rect.bottom >= 0 &&
          rect.right >= 0 &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        )
      }  */

    render() {
        return (
            <div ref='UniqueElementIdentifies' className="parallax" id="parallax-2" data-image-src= {this.props.dataimgsrc} data-height="400px">
                <Container >
                    <Row>
                        <Col sm='12' md={{ size:'auto', offset: 4}} style={{margin: '5% auto auto auto'}}>
                            <h1 className="display-5">HOW IT WORKS</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm='12' md={{ size:'auto',}} style={{margin: '2% auto auto auto', width: '85%' }}>
                            <h4> Found-Missing is the world's largest lost and found platform. With over 1.5 million items found, 
                                you can easily find your lost item with us. Find out how we can help you and register your lost item with Found-Missing today. </h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{size: 'auto', offset:5}} style={{margin: '5% auto auto auto'}}>
                            <Button>Know more</Button>      
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Howitworks;