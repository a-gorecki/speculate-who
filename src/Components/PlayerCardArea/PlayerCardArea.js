import React from "react";
import "./PlayerCardArea.css";
import { Card } from "../Card/Card";

export function PlayerCardArea({ person }) {
    return (
        <div className="playerCardAreaDesktop">
            <h2 className="playerCardLabel">Your card:</h2>
            <Card person={person} className="playerCard" />
            <button>New card</button>
            <button>Reset board</button>
        </div>
    );
}
