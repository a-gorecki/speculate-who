import React from "react";
import { BoardList } from "../BoardList/BoardList";
import logo from "../../logo.png";
import "./Menu.css";

export const Menu = ({ handleBoardSelection, boards }) => {
    return (
        <div className="menu">
            <div className="logoContainer">
                <img src={logo} alt="Speculate Who" />
            </div>
            <div>
                <h1>Select a Game Board</h1>
            </div>
            <div className="boardGrid">
                <BoardList boards={boards} onSelect={handleBoardSelection} />
            </div>
        </div>
    );
};
