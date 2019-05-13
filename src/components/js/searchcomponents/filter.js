import React from 'react';
import {
} from 'react-bootstrap';
import {
    Button,
    Card,
    CardBody,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    Row,
    Col
} from 'reactstrap';

class Filter extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

    render() {
        return(
            <React.Fragment>
                <div style={{margin:'2%'}}></div>
                    <Row>
                        <Col xs={{size:10, offset:1}}>
                            <Card style={{background: "gainsboro"}}>
                                <CardBody>
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{position: 'absolute'}}>
                                        <DropdownToggle caret>
                                        location
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem>location 1</DropdownItem>
                                        <DropdownItem>location 2</DropdownItem>
                                        <DropdownItem>location 3</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>location 4</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    <Input type="date" name="date" id="date" placeholder="date" style={{width: 'auto', position: 'absolute', margin: '0% 0% 0% 20%'}}/>
                                    <Input type="text" name="lost_item" id="lost_item" placeholder="Lost Item" style={{width: 'auto', position: 'absolute', margin: '0% 0% 0% 40%'}}/>
                                    {/* <Input type="text" name="best_location" id="best_location" placeholder="Best Location" style={{width: 'auto', position: 'absolute', margin: '0% 0% 0% 65%'}}/>  */}
                                    <Button color="success" style={{float: 'inline-end'}}>search</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                <div style={{margin:'2%'}}></div>
            </React.Fragment>
        );
    }
}

export default Filter;