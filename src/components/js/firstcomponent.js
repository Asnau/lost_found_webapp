import React from 'react';
import $ from 'jquery';
import { 
    Button,
    Container,
    Row,
    Col 
} from 'reactstrap';
import '../style/style-parallex.css';
import '../style/firstcomponent.less';


class FirstComponent extends React.Component {
    constructor(props) {
        super(props);
        this.para = this.para.bind(this);
        this.state = {};
    }
    componentDidMount = (props) => {
        this.para();
        document.addEventListener('scroll', this.isInViewport, true);
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
      
        $(window).scroll(function() {
          var scrolled = $(window).scrollTop()
          $('.parallax').each(function(index, element) {
            var initY = $(this).offset().top
            var height = $(this).height()
            var diff = scrolled - initY
            var ratio = Math.round((diff / height) * 100)
            $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
          })
        })
      })
    }

    render() {
        var NewStyle = {
            buttonmargin: { margin: 'calc(100% - 90%) auto auto 6%'},
            headermargin: { margin: '10% auto auto auto'},
            textmargin: { margin: '2% auto auto auto', width: '85%'}
        }
        var buttonstyle = Object.assign({},NewStyle.buttonmargin);
        var headerstyle = Object.assign({},NewStyle.headermargin);
        var textstyle = Object.assign({},NewStyle.textmargin);
        return (
            <div ref='UniqueElementIdentifies' className="parallax" id="parallax-2" data-image-src= {this.props.dataimgsrc} data-height="600px">
                <Container >
                    <Row>
                        <Col sm='12' md={{ size:'auto', offset: 3}} style={headerstyle}>
                            <h1 className="display-5">India's largest Lost & Found platform</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm='12' md={{ size:'auto',}} style={textstyle}>
                            <h4> Found-Missing™ is the India's Largest Recovery company which helps return lost items to their rightful owners. 
                                With over an 80% recovery rate, Found-Missing recovery tags help identify and protect all types of portable items ranging from 
                                cell phones to laptops, keys to luggage and even cats & dogs. Found-Missing system is simple, convenient, confidential and rewarding! </h4>
                        </Col>
                    </Row>
                    <Row style={buttonstyle}>
                        <Col sm={{size: 'auto', offset:3}}>
                            <Button color="danger">Lost Something</Button>       
                        </Col>
                        <Col sm={{size: 'auto', offset:1}}>
                            <Button color="success">Found Something</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default FirstComponent;