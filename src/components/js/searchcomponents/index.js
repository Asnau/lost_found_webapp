import React, { Component } from 'react';
import NavbarComponent from '../Navbar';
import {
} from 'reactstrap';
import './App.css';
import './components/style/Sticky-Navbar.css';

class App extends Component {
  
  render() {
    return (
      <div>
        <NavbarComponent/>
      </div>
    );
  }
}



export default App;