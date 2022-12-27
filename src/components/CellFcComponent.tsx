import React from 'react';
import {Cell} from "../models/Cell";
import "../App.css";


interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellFcComponent: React.FC<CellProps> = ({cell, selected, click}) => {
    return (
        <div onClick={() => click(cell)}
             className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
             style={{background: cell.available && cell.figure ? "teal" : ""}}>

            {cell.available && !cell.figure && <div className="available"></div>}

            {cell.figure?.logo && <img src={cell.figure.logo} alt="figure"/>}

        </div>
    );
};

export default CellFcComponent;