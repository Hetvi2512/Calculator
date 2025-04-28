import React from 'react';
import './App.css';
import { Component } from 'react';
import Calculator from './page/calculator/calculator';

class App extends Component {
  console.log("Hello");
  const a = 10;
  render(){
    return (
      <div className="App">
     <Calculator/>
      </div>
    );
  }
  
}

export default App;
