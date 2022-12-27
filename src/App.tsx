import React, {useEffect, useState} from 'react';
import "./App.css";
import {BoardFcComponent} from "./components/BoardFcComponent";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";


const App: React.FC = () => {

    const [board, setBoard] = useState(new Board());
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

    const restart = () => {
        const newBoard = new Board();
        newBoard.initCells()
        newBoard.addFigures()
        setBoard(newBoard)
    }

    const swapPlayer = () => {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }

    useEffect(() => {
        restart()
        setCurrentPlayer(whitePlayer)
    }, [])

    return (
        <div className="app">
            <Timer restart={restart}
                   currentPlayer={currentPlayer}/>
            <BoardFcComponent board={board}
                              setBoard={setBoard}
                              currentPlayer={currentPlayer}
                              swapPlayer={swapPlayer}/>

            <div className={"lostFigures"}>
                <LostFigures title={"Чёрные фигуры:"} figures={board.lostBlackFigures}/>
                <LostFigures title={"Белые фигуры:"} figures={board.lostWhiteFigures}/>
            </div>

        </div>
    )
}
export default App;
