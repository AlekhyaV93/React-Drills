import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/ImageComponent';
import ToDo from './components/ToDoComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName:[],
      input:""
    }
  }


  handleInputChange = (event) => {
    const value = event.target.value; 
    this.setState({
      input:value
    })
  }

  handleSubmit = () => {
    
    this.setState({
      foodName : [...this.state.foodName,this.state.input],
      input:""
    })
  }

  render() {
    const compToDo = this.state.foodName.map((food,index) => {
      return(
        <ToDo key={index} list={food} />
      )
    })
    return (
      <div>
        <h3>My ToDo List:</h3>
        <br/>
        <input type="text" id="toDo" name="foodName" placeholder="Enter task" onChange={this.handleInputChange} value={this.state.input} />
        <button onClick={this.handleSubmit}>Add</button>
        {compToDo}
      </div>
    )
  }

}

export default App;
