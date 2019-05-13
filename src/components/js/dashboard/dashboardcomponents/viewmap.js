import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

class Viewmap extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div onClick={this.props.mapStates}>
                    <Modal isOpen={this.props.mapState} toggle={this.props.mapStates} className={this.props.className} size= 'xl'>
                        <ModalHeader toggle={this.props.mapStates}>Map</ModalHeader>
                        <ModalBody style={{position: 'relative', height: '40em',padding: '0rem'}}>
                            <Map google={this.props.google} zoom={14}>
                                <Marker onClick={this.onMarkerClick}
                                        name={'Current location'} />
                                        
                        
                                <InfoWindow onClose={this.onInfoWindowClose}>
                                    <div>
                                    {/* <h1>{this.state.selectedPlace.name}</h1> */}
                                    </div>
                                </InfoWindow>
                            </Map>
                        </ModalBody>
                        <ModalFooter/>
                    </Modal>
                </div>
            </React.Fragment>
        );
    }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBtXDNbs8CadfYjPNFFQ4FKe1o0r5IY0C0')
})(Viewmap)
