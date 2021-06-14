import React from "react";
import "./PlayerCardArea.css";
import { Card } from "../Card/Card";

export function PlayerCardArea({ person, onCardReset, onBoardReset }) {
    return (
        <div className="playerCardAreaDesktop">
            <button
                onClick={() => {}}
                className="optionButton"
                id="boardMenuButton"
            >
                Select Board
            </button>
            <h2 className="playerCardLabel">Your card:</h2>
            <Card person={person} className="playerCard" canFlip={false} />
            <button
                onClick={onCardReset}
                className="optionButton"
                id="cardResetButton"
            >
                New card
            </button>
            <button
                onClick={onBoardReset}
                className="optionButton"
                id="boardResetButton"
            >
                Reset board
            </button>
        </div>
    );
}
