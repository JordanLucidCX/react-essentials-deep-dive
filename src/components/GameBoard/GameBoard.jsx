import { useState } from "react";

const initalGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initalGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((previousState) => {
            const updatedState = [...previousState.map(innerArray => [...innerArray])];
            updatedState[rowIndex][colIndex] = 'X';
            return updatedState;
        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) =>  <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                        <li key={colIndex}>
                            <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>
                    )}
                </ol>
            </li>)}
        </ol>
    );
}

export default GameBoard;