import React from "react";
import { BoardCard } from "../BoardCard/BoardCard";
import "./BoardList.css";

export const BoardList = ({ boards, onSelect }) => {
    return (
        <div className="boardList">
            {boards.map((board, index) => (
                <BoardCard
                    board={board}
                    onSelect={onSelect}
                    index={index}
                    key={index}
                />
            ))}
        </div>
    );
};
