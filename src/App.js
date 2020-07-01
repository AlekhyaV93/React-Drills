import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/ImageComponent'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:"https://www.w3schools.com/images/lamp.jpg"
    }
  }

  render() {
    return (
      <div>
        <Image src={this.state.url}/>
      </div>
    )
  }

}

export default App;
