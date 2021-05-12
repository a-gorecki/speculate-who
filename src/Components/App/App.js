import './App.css';
import {Card} from "../Card/Card"
import React from 'react';
import {CardList} from "../CardList/CardList"

export class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {people: ["one", "two", "three", "four", "five", "six",
    "one", "two", "three", "four", "five", "six",
    "one", "two", "three", "four", "five", "six",
    "one", "two", "three", "four", "five", "six"]}
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <CardList people={this.state.people} />
      </header>
    </div>
  );
}
}

export default App;
