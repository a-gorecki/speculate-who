import React from "react";
import "./PlayerCardArea.css";
import { Card } from "../Card/Card";

export function PlayerCardArea({
    person,
    onCardReset,
    onBoardReset,
    onReturnToMenu,
}) {
    return (
        <div className="playerCardAreaDesktop">
            <button
                onClick={onReturnToMenu}
                className="optionButton"
                id="boardMenuButton"
            >
                Back to Menu
            </button>
            <h2 className="playerCardLabel">Your card:</h2>
            <Card person={person} className="playerCard" canFlip={false} />
            <button
                onClick={onCardReset}
                className="optionButton"
                id="cardResetButton"
            >
                New Card
            </button>
            <button
                onClick={onBoardReset}
                className="optionButton"
                id="boardResetButton"
            >
                Reset Board
            </button>
        </div>
    );
}
