import React, { Component } from 'react';
import NavbarComponent from './components/js/Navbar';
import Example from './components/js/carousal';
import FirstComponent from './components/js/firstcomponent';
import Parallex from './components/js/parallex';
import Howitworks from './components/js/HowItWorks';
//import Parallex1 from './components/js/parallex1';
import FooteraboutUs from './components/js/footer-aboutus';
import {
} from 'reactstrap';
import './App.css';
import './components/style/Sticky-Navbar.css';

class App extends Component {
  
  render() {
    return (
      <div>
        <NavbarComponent/>
        <FirstComponent dataimgsrc= 'https://source.unsplash.com/random/1920x1082'/>
        <div>
          <Howitworks dataimgsrc= 'https://source.unsplash.com/random/1920x1081'/>
        </div>
        <div>
          <Example/>
        </div>
        <div>
          <Parallex dataimgsrc= 'https://source.unsplash.com/random/1920x1080'/>
        </div>
        <div>
        <FooteraboutUs/>
      </div>
      </div>
    );
  }
}



export default App;
