import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';

class Breadcrumbs extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Breadcrumb>
                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="#">Search Results</a></BreadcrumbItem>
                </Breadcrumb>
            </React.Fragment>
        ) 
    }
}

export default Breadcrumbs;