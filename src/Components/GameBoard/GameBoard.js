import React, { useEffect, useState } from "react";
import { CardList } from "../CardList/CardList";
import "./GameBoard.css";
import { Card } from "../Card/Card";
import { PlayerCardArea } from "../PlayerCardArea/PlayerCardArea";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

export function GameBoard({ people }) {
    const [width, setWidth] = useState(window.innerWidth);
    const [btmSheetOpen, setBtmSheetOpen] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(
        Math.floor(Math.random() * people.length)
    );

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));

        return () =>
            window.removeEventListener("resize", () =>
                setWidth(window.innerWidth)
            );
    });

    const handleCardReset = () => {
        setCurrentCardIndex(Math.floor(Math.random() * people.length));
    };

    const getLayout = (width) => {
        if (width < 1000) {
            return (
                <div>
                    <button
                        onClick={() => setBtmSheetOpen(true)}
                        className="showSheetButton"
                    >
                        Show your card
                    </button>
                    <CardList people={people} />
                    <BottomSheet
                        open={btmSheetOpen}
                        onDismiss={() => setBtmSheetOpen(false)}
                    >
                        <PlayerCardArea
                            person={people[currentCardIndex]}
                            onCardReset={handleCardReset}
                        />
                    </BottomSheet>
                </div>
            );
        }
        return (
            <div className="gameAreaDesktop">
                <div>
                    <CardList people={people} />
                </div>
                <div className="playerCardContainer">
                    <PlayerCardArea
                        person={people[currentCardIndex]}
                        onCardReset={handleCardReset}
                    />
                </div>
            </div>
        );
    };

    return getLayout(width);
}

// TODO: conditionally switch between mobile and desktop interfaces https://goshakkk.name/different-mobile-desktop-tablet-layouts-react/
// https://www.npmjs.com/package/react-spring-bottom-sheet
