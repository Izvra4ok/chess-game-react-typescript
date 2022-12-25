import React from 'react';
import "../App.css";
import {Board} from "../models/Board";
import CellFcComponent from "./CellFcComponent";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void
}

export const BoardFcComponent: React.FC<BoardProps> = ({board, setBoard}) => {
    return (
        <div className="board">
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellFcComponent cell={cell} key={cell.id}/>)}
                </React.Fragment>
            )}
        </div>
    );
};