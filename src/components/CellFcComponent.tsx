import React from 'react';
import {Cell} from "../models/Cell";
import "../App.css";


interface CellProps {
    cell: Cell
}

const CellFcComponent: React.FC<CellProps> = ({cell}) => {
    return (
        <div className={["cell",cell.color].join(" ")}>
            {cell.figure?.logo && <img src={cell.figure.logo} alt="figure"/>}
        </div>
    );
};

export default CellFcComponent;