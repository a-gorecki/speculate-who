import { board as DragBoard } from "./dragRaceBoard";
import { board as Portraits1 } from "./portraitBoard";

export const boards = [
    {
        name: "Drag Race",
        imgSrc: DragBoard.board[0].imgSrc,
        board: DragBoard.board,
    },
    {
        name: "Portraits",
        imgSrc: Portraits1.board[0].imgSrc,
        board: Portraits1.board,
    },
];
