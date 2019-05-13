import React from 'react';
import {
 Container,
 Navbar,
 NavbarBrand,
 NavbarToggler,
 Nav,
 NavItem,
 NavLink,
 Collapse,
 UncontrolledDropdown,
 DropdownMenu,
 DropdownItem,
 DropdownToggle,
 InputGroup,
 InputGroupAddon,
 InputGroupText,
 Input,
 Button,
 Popover,
 Row,
 Col,
 PopoverBody
} from 'reactstrap';

class DashboardNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            popoverOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.setState.isOpen,
            popoverOpen: !this.state.popoverOpen
        })
    }
    /* toggle1() {
        this.setState({
            
          popoverOpen: !this.state.popoverOpen
        });
      } */


    render() {
        return (
            <div>
                <Navbar color="" light expand="md" style={{background: "tomato"}}>
                <Container fluid>
                    <Col xs="6" sm="4" lg="auto">
                        <NavbarBrand href="/">found-Missing</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                    </Col>
                    <Col xs="6" sm={{size: 4, offset: 0}}>
                        <InputGroup size="sm">
                            <Input placeholder="Search Anything" step="1"/>
                            <InputGroupAddon addonType="append">
                                <Button color="primary">search</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                    <Col sm="4" lg="auto">
                        <Button id="Popover1" type="button">
                            #M#
                        </Button>
                        <Popover trigger="focus" placement="bottom" target="Popover1" isOpen={this.state.popoverOpen} toggle={this.toggle} >
                            <PopoverBody>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Message1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Message2
                                    </DropdownItem>
                                    <DropdownItem>
                                        Message3
                                    </DropdownItem>
                                </DropdownMenu>
                            </PopoverBody> 
                        </Popover> 
                    </Col>
                </Container>
                </Navbar>
            </div>
        )
    }
}

export default DashboardNavbar;