import React, { useEffect, useState } from "react";
import { CardList } from "../CardList/CardList";
import "./GameBoard.css";
import { Card } from "../Card/Card";
import { PlayerCardArea } from "../PlayerCardArea/PlayerCardArea";

export function GameBoard({ people }) {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));

        return () =>
            window.removeEventListener("resize", () =>
                setWidth(window.innerWidth)
            );
    });

    const getLayout = (width) => {
        if (width < 1000) {
            return <h1>Mobile layout</h1>;
        }
        return (
            <div className="gameAreaDesktop">
                <div>
                    <CardList people={people} />
                </div>
                <div className="playerCardContainer">
                    <PlayerCardArea person={people[0]} />
                </div>
            </div>
        );
    };

    return getLayout(width);
}

// TODO: conditionally switch between mobile and desktop interfaces https://goshakkk.name/different-mobile-desktop-tablet-layouts-react/
// https://www.npmjs.com/package/react-spring-bottom-sheet
