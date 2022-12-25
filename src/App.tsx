import React, {useEffect, useState} from 'react';
import "./App.css";
import {BoardFcComponent} from "./components/BoardFcComponent";
import {Board} from "./models/Board";


const App: React.FC = () => {

    const [board, setBoard] = useState(new Board())

    const restart = () => {
        const newBoard = new Board();
        newBoard.initCells()
        setBoard(newBoard)
    }

    useEffect(() => {
        restart()
    }, [])

    return (
        <div className="app">
            <BoardFcComponent board={board} setBoard={setBoard}/>
        </div>
    )
}
export default App;
