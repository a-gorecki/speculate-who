import './App.css';
import {Card} from "../Card/Card"
import React from 'react';
import {CardList} from "../CardList/CardList"
import {board} from "../../board"

export class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {people: ["one", "two", "three", "four", "five", "six",
    "one", "two", "three", "four", "five", "six",
    "one", "two", "three", "four", "five", "six",
    "one", "two", "three", "four", "five", "six"],
    board: board.board}

  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <CardList people={this.state.board} />
      </header>
    </div>
  );
}
}

export default App;
