import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    }
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name] : value
    })
  }

  handleSubmit = (event) => {
    console.log(this.state);
    alert(JSON.stringify(this.state));
  }


  render() {
    return (
      <div>
        <label htmlFor="userName">User Name</label>
        <input type="text" id="userName" name="userName" placeholder="User Name"  onChange = {this.handleInputChange}/>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" placeholder="Password" onChange = {this.handleInputChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }

}

export default App;
