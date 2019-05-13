import React from 'react';
import $ from 'jquery';
import 'bootstrap';

import {
Nav,
Navbar,
NavItem,
Button,
Container
} from 'reactstrap';

import Dashboardcontent from './dashboardcontent';
import '../../../style/SideBar.css';

class DashboardSidebar extends React.Component {
    /* openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      } */

    

    render() {
        return(
            <React.Fragment>
            
            <div className="wrapper" style={{}}>
                {/* <!-- Sidebar  --> */}
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3 style={{fontSize: '1.75rem'}}>Welcome User</h3>
                        <strong>AN</strong>
                    </div>

                    <ul className="list-unstyled components" style={{padding: '20px 0', borderBottom: '1px solid #47748b'}}>
                        <li className="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <i className="fas fa-home"></i>
                                Home
                            </a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">Home 1</a>
                                </li>
                                <li>
                                    <a href="#">Home 2</a>
                                </li>
                                <li>
                                    <a href="#">Home 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-briefcase"></i>
                                About
                            </a>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <i className="fas fa-copy"></i>
                                Pages
                            </a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Page 1</a>
                                </li>
                                <li>
                                    <a href="#">Page 2</a>
                                </li>
                                <li>
                                    <a href="#">Page 3</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                {/*  Page Content  */}
                <Dashboardcontent/>
            </div>
            {/* <div id="main">
                <span style= {{fontSize:"30px", cursor:"pointer"}} onClick={this.openNav}>&#9776; open</span>
            </div>
            <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            </div> */}

            <footer style={{background: "#005dff66 "}}>
                <Container fluid>
                    <span className="text-muted">copyright to Ashish Nautiyal</span>
                </Container>
            </footer>
                
            </React.Fragment>
        )
    }
}

export default DashboardSidebar;