import React from 'react';
import Login from './login/login';
import Signup from './login/signup';
import DashboardHome from './dashboard/dashboardhome';
import {
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
    DropdownToggle
} from 'reactstrap';

import {
  HashRouter,
  NavLink as NavRef,
  Route,
  Switch,
  Router
} from 'react-router-dom';

class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            loginmodal: false,
            signupmodal: false
        };
        this.loginmodals = this.loginmodals.bind(this);
        this.signupmodals = this.signupmodals.bind(this);
     //   window.scroll = this.stickyNavbar();
    }

   /*  stickyNavbar() {
        var Navbar = document.getElementById("Navbar");
        console.log(Navbar);
        var sticky = Navbar.offsetTop;
        if (window.pageYOffset >= sticky) {
          Navbar.classList.add("sticky")
        } else {
          Navbar.classList.remove("sticky");
        }
      } */

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    loginmodals(state) {
      this.setState({
        loginmodal: !this.state.loginmodal,
      });
    }

    signupmodals(state) {
      this.setState({
        signupmodal: !this.state.signupmodal,
      });
    }

    render() {

        //this.modals(); */
        return (
            <div>
                <Navbar color="" light expand="md" style={{background: "#483d8b"}}>
                <NavbarBrand href="/">found-Missing</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                  <NavItem>
                      <HashRouter><NavLink> <NavRef to="/dashboard" replace>Dashboardhome 
                      </NavRef></NavLink>
                      </HashRouter> 
                    </NavItem>
                    <NavItem>
                      <NavLink to="/components/">About us</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://github.com/reactstrap/reactstrap">How it Works</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        login/signup
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem onClick={this.loginmodals}>
                          Login
                          <Login loginmodal={this.state.loginmodal} loginmodals={this.loginmodals}/>
                        </DropdownItem>
                        <DropdownItem onClick={this.signupmodals}>
                          Signup
                          <Signup signupmodal={this.state.signupmodal} signupmodals={this.signupmodals}/>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
              <HashRouter>
                  <Route path="/dashboard" component={DashboardHome}/>
              </HashRouter>
            </div>
        )
    }
} 

export default NavbarComponent;