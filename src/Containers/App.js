import React, { Component } from "react";
import "./App.css"
import Persons from "../Components/Persons/Persons";
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 'babua1', name: "Budi", age: 22 },
      { id: 'baibf2', name: "Ari", age: 19 },
      { id: 'badb21', name: "Deni", age: 21 }
    ],
    showPersons: false
  };

  changeNameHandler = (event, id) => {

    const personsIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personsIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personsIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'blue',
      color: 'white',
      padding: '8px',
      border: '1px solid blue',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.changeNameHandler} />
        </div>
      );
      style.backgroundColor = 'green'
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>Selamat Belajar React</h1>
        <p className={classes.join(' ')}>React Berjalan</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Ganti Nama</button>
        { persons }
      </div>
    );
  }
}

export default App;