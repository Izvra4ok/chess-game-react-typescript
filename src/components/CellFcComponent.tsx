import React from 'react';
import {Cell} from "../models/Cell";
import "../App.css"


interface CellProps {
    cell: Cell
}

const CellFcComponent: React.FC<CellProps> = ({cell}) => {
    return (
        <div className={["cell",cell.color].join(" ")}>

        </div>
    );
};

export default CellFcComponent;