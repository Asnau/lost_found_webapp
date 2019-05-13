import React from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardText,
    CardBody,
    CardImg,
    Container,
    DropdownToggle,
    Row,
    Col
} from 'reactstrap';

class Categories extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Row>
                    <Col xs={{size: 3, offset:0}}>
                    <Card>
                        <CardHeader>Categories</CardHeader>
                        <CardBody>
                            <CardTitle>All Categories</CardTitle>
                            <CardText>Category 1</CardText>
                            <CardText>Category 2</CardText>
                            <CardText>Category 3</CardText>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <CardTitle>Search Results:</CardTitle>
                        <Card>
                            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
                        </Card>
                        
                    </Card>
                    </Col>
                </Row> 
            </React.Fragment>
        );
    }
}

export default Categories;