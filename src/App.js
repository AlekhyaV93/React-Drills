import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/ImageComponent';
import NewTask from './components/NewTask';
import List from './components/ListComponent';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: [],
      input: "",
      persons:[]
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const persons = response.data;  
      console.log(persons);
      this.setState({
        persons:persons
      })
    })
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
    const dataFromApi = this.state.persons.map((person)=>{
      return(
        <div key={person.id}>
            <h5>{person.name} - {person.email}</h5>
        </div>
      )
    })
    return (
      <div>
        {dataFromApi}
        <h3>My ToDo List:</h3>
        <br />
        <NewTask onSubmit ={this.handleSubmit} onInputChange={this.handleInputChange} input ={this.state.input}/>
        <List foodName={this.state.foodName} />
      </div>
    )
  }

}

export default App;
