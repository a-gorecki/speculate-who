import './App.css';
import {Card} from "../Card/Card"
import React from 'react';

export class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {people: ["one", "two", "three"]}
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        {
          this.state.people.map((person, index) => <Card person={person} key={index}/>)
        }
      </header>
    </div>
  );
}
}

export default App;
