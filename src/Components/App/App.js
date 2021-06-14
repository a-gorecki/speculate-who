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

    if (showBoard) {
        currentScreen = <GameBoard people={board} />;
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
