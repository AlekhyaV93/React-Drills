import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/ImageComponent';
import NewTask from './components/NewTask';
import List from './components/ListComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: [],
      input: ""
    }
  }


  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      input: value
    })
  }

  handleSubmit = () => {
    this.setState({
      foodName: [...this.state.foodName, this.state.input],
      input: ""
    })
  }

  render() {
    return (
      <div>
        <h3>My ToDo List:</h3>
        <br />
        <NewTask onSubmit ={this.handleSubmit} onInputChange={this.handleInputChange} input ={this.state.input}/>
        <List foodName={this.state.foodName} />
      </div>
    )
  }

}

export default App;
