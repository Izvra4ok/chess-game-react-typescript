import React, {useEffect, useState} from 'react';
import "../App.css";
import {Board} from "../models/Board";
import CellFcComponent from "./CellFcComponent";
import {Cell} from "../models/Cell";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void
}


export const BoardFcComponent: React.FC<BoardProps> = ({board, setBoard}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    const click = (cell: Cell) => {
        if (cell.figure) {
            setSelectedCell(cell)
        }
    };

    useEffect(() => {
        highlightCells();
    }, [selectedCell])

    const highlightCells = () => {
        board.highlightCells(selectedCell);
        updateBoard();
    };

    const updateBoard = () => {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }
    return (
        <div className="board">
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellFcComponent
                            click={click}
                            cell={cell}
                            key={cell.id}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}/>)}
                </React.Fragment>
            )}
        </div>
    );
};