import React from "react";
import "./BoardCard.css";

export const BoardCard = ({ board, onSelect, index }) => {
    const handleSelect = () => {
        console.log("Selected index " + index);
        onSelect(index);
    };

    return (
        <div className="scene">
            <div className="card" id="cardClick" onClick={handleSelect}>
                <div className="cardFace front">
                    <div className="frontContainer">
                        <img
                            className="characterImg"
                            src={board.imgSrc}
                            alt={board.name}
                        />
                        <div className="characterName">
                            <strong>{board.name}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
