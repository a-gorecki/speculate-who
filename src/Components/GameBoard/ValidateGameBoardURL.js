import React from "react";
import { useParams, useHistory } from "react-router";
import { GameBoard } from "./GameBoard";
import "./Validate.css";

export const ValidateGameBoardURL = ({ boards }) => {
    let { boardId } = useParams();
    let history = useHistory();

    if (boardId >= boards.length || boardId < 0 || !/^\d+$/.test(boardId)) {
        return (
            <div>
                <h1>BoardID "{boardId}" not valid</h1>
                <button
                    onClick={() => history.push("/")}
                    className="optionButton"
                    id="boardMenuButton"
                >
                    Go to Board Selection Menu
                </button>
            </div>
        );
    }

    return <GameBoard boards={boards} />;
};
