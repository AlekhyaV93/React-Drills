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
          name: "spaghetti"
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
          name: "pasta"
        }
      ]
    }
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const foodNames = this.state.food.filter((item) => {
      if (item.name[0] === value)
        return item
    }).map((item) => {
      return (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      )
    })
    console.log(foodNames);
    this.setState({
      inputField: foodNames
    })

  }
  render() {
    return (
      <div>
        <input type="text" id="feild1" name="feild2" onChange={this.handleInputChange} />
        <p>{this.state.inputField}</p>
      </div>
    )
  }

}

export default App;
