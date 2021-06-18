import "./App.css";
import React, { useState } from "react";
import { Menu } from "../Menu/Menu";
import { GameBoard } from "../GameBoard/GameBoard";
import { boards } from "../../Data/boards";

export function App() {
    const [board, setBoard] = useState(boards[0].board);
    const [showBoard, setShowBoard] = useState(false);

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

    const handleBoardSelection = (index) => {
        setBoard(boards[index].board);
        setShowBoard(true);
    };

    const handleReturnToMenu = () => {
        setShowBoard(false);
    };

    if (showBoard) {
        currentScreen = (
            <GameBoard
                people={board}
                onFlip={handleFlip}
                handleBoardReset={handleBoardReset}
                handleReturnToMenu={handleReturnToMenu}
            />
        );
    } else {
        currentScreen = (
            <Menu handleBoardSelection={handleBoardSelection} boards={boards} />
        );
    }

    return (
        <div className="App">
            <header className="App-body">{currentScreen}</header>
        </div>
    );
}

export default App;
