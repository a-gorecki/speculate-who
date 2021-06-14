import "./App.css";
import { Card } from "../Card/Card";
import React, { useState } from "react";
import { CardList } from "../CardList/CardList";
import { board as defaultBoard } from "../../Data/dragRaceBoard";
import { Menu } from "../Menu/Menu";
import { GameBoard } from "../GameBoard/GameBoard";

export function App() {
    const [board, setBoard] = useState(defaultBoard.board);
    const [showBoard, setShowBoard] = useState(true);

    const changeToBoard = () => setShowBoard(true);
    const changeToMenu = () => setShowBoard(false);

    let currentScreen;

    const handleFlip = (index) => {
        let newArray = [...board];
        newArray[index].flipped = !!newArray[index].flipped ? false : true;

        setBoard(newArray);
    };

    const handleBoardReset = () => {
        let newArray = [...board];
        newArray.forEach((person) => (person.flipped = false));
        console.log("Reset");

        setBoard(newArray);
    };

    if (showBoard) {
        currentScreen = (
            <GameBoard
                people={board}
                onFlip={handleFlip}
                handleBoardReset={handleBoardReset}
            />
        );
    } else {
        currentScreen = <Menu />;
    }

    return (
        <div className="App">
            <header className="App-header">{currentScreen}</header>
        </div>
    );
}

export default App;
