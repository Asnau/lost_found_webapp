import React, { Component } from 'react';
import {
    
} from 'reactstrap';
import DashboardNavbar from './dashboardcomponents/dashboardNavbar';
import DashboardSidebar from './dashboardcomponents/dashboardsidebar';

class DashboardHome extends Component {
    render() {
        return(
            <React.Fragment>
                <DashboardNavbar/>
                <DashboardSidebar/>
            </React.Fragment>
        )
    }
}

export default DashboardHome;