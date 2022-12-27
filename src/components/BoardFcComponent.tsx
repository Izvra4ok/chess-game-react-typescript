import React, {useEffect, useState} from 'react';
import "../App.css";
import {Board} from "../models/Board";
import CellFcComponent from "./CellFcComponent";
import {Cell} from "../models/Cell";
import {Player} from "../models/Player";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void
    currentPlayer: Player | null
    swapPlayer: () => void
}


export const BoardFcComponent: React.FC<BoardProps> = ({board, setBoard, swapPlayer, currentPlayer}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    const click = (cell: Cell) => {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            swapPlayer();
            setSelectedCell(null);
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            }
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
        <div>
            <h3 className={"currentPlayer"}>Текущий игрок: {currentPlayer?.color}</h3>
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
        </div>
    );
};