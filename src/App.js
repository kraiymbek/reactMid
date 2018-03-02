import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./component/navigation/Navigation";
import Car from "./component/List/Car";

class App extends Component {
  render() {
    return (
      <div className="App">
            <Navigation/>
          <hr/>
          <Car/>
      </div>
    );
  }
}

export default App;
