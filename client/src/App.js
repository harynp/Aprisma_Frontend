import React, { Component } from 'react';
import Navbar from '../src/components/Navbar'
import Navs from '../src/components/Nav'
import Index from '../src/components/Index'
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
      <Navbar/>
      <Navs/>
      <Index/>
      </div>
    );
  }
}

export default App;
