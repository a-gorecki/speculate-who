import React from "react";
import "./PlayerCardArea.css";
import { Card } from "../Card/Card";

export function PlayerCardArea({ person, onCardReset, onBoardReset }) {
    return (
        <div className="playerCardAreaDesktop">
            <h2 className="playerCardLabel">Your card:</h2>
            <Card person={person} className="playerCard" canFlip={false} />
            <button onClick={onCardReset}>New card</button>
            <button onClick={onBoardReset}>Reset board</button>
        </div>
    );
}
