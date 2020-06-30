import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: "",
      food: [
        {
          id: 1,
          name:"spaghetti"
        },
        {
          id: 2,
          name: "ice cream"
        }
        ,
        {
          id: 3,
          name: "sushi"
        },
        {
          id: 4,
          name:"pasta"
        }
      ]
    }
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      inputField: value
    })

  }

  render() {

    const foodNames = this.state.food.map((item) => {
      return(
      <div key={item.id}>
        <h2>{item.name}</h2>
      </div>
      )
    })
    return (
      <div>
        <input type="text" id="feild1" name="feild2" value={this.state.inputField} onChange={this.handleInputChange} />
        <p>{this.state.inputField}</p>
        {foodNames}
      </div>
    )
  }

}

export default App;
