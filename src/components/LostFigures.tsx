import React from 'react';
import {Figure} from "../models/figures/Figure";


interface LostFigureProps {
    title: string
    figures: Figure[]
}

const LostFigures: React.FC<LostFigureProps> = ({title, figures}) => {
    return (
        <div className={"lost"}>
            <h3>{title}</h3>
            {figures.map(figure =>
                <div key={figure.id}>
                    {figure.name} {figure.logo && <img width={15} height={15} src={figure.logo} alt="figure"/>}
                </div>)}
        </div>
    );
};

export default LostFigures;