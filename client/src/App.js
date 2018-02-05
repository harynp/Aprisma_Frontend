import React, { Component } from 'react';
import Navbar from '../src/components/Navbar'
import Index from '../src/components/Index'
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
      <Navbar/>
      <Index/>
      </div>
    );
  }
}



export default App;
