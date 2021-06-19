import React from "react";
import { BoardList } from "../BoardList/BoardList";
import logo from "../../logo.png";
import "./Menu.css";
import { useHistory } from "react-router-dom";

export const Menu = ({ boards }) => {
    let history = useHistory();

    const handleBoardSelection = (index) => {
        history.push("/board/" + index);
    };

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
