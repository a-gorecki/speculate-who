import React, { useEffect, useState } from "react";
import { CardList } from "../CardList/CardList";
import "./GameBoard.css";
import { PlayerCardArea } from "../PlayerCardArea/PlayerCardArea";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { useHistory, useParams } from "react-router";

export function GameBoard({ boards }) {
    let { boardId } = useParams();
    let history = useHistory();

    const [board, setBoard] = useState(boards[boardId].board);
    const [width, setWidth] = useState(window.innerWidth);
    const [btmSheetOpen, setBtmSheetOpen] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(
        Math.floor(Math.random() * board.length)
    );

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));

        return () =>
            window.removeEventListener("resize", () =>
                setWidth(window.innerWidth)
            );
    });

    useEffect(() => {
        setBoard(boards[boardId].board);
    }, [boardId, boards]);

    const handleFlip = (index) => {
        let newArray = [...board];
        newArray[index].flipped = !!newArray[index].flipped ? false : true;

        setBoard(newArray);
    };

    const handleBoardReset = () => {
        let newArray = [...board];
        newArray.forEach((person) => (person.flipped = false));

        setBoard(newArray);
    };

    const handleCardReset = () =>
        setCurrentCardIndex(Math.floor(Math.random() * board.length));

    const getLayout = (width) => {
        if (width < 1000) {
            return (
                <div className="gameAreaMobile">
                    <div className="mobileContentWrapper">
                        <button
                            onClick={() => setBtmSheetOpen(true)}
                            className="showSheetButton"
                        >
                            Show your card
                        </button>

                        <CardList people={board} onFlip={handleFlip} />

                        <BottomSheet
                            open={btmSheetOpen}
                            onDismiss={() => setBtmSheetOpen(false)}
                        >
                            <PlayerCardArea
                                person={board[currentCardIndex]}
                                onCardReset={handleCardReset}
                                onBoardReset={handleBoardReset}
                                onReturnToMenu={() => {
                                    setBtmSheetOpen(false);
                                    history.push("/");
                                }}
                            />
                        </BottomSheet>
                    </div>
                </div>
            );
        }
        return (
            <div className="gameAreaDesktop">
                <div>
                    <CardList people={board} onFlip={handleFlip} />
                </div>
                <div className="playerCardContainer">
                    <PlayerCardArea
                        person={board[currentCardIndex]}
                        onCardReset={handleCardReset}
                        onBoardReset={handleBoardReset}
                        onReturnToMenu={() => history.push("/")}
                    />
                </div>
            </div>
        );
    };

    return getLayout(width);
}

// TODO: conditionally switch between mobile and desktop interfaces https://goshakkk.name/different-mobile-desktop-tablet-layouts-react/
// https://www.npmjs.com/package/react-spring-bottom-sheet
