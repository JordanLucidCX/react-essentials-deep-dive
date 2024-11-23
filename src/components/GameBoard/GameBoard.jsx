
function GameBoard({ onSelectSquare, turns }) {
    // const [gameBoard, setGameBoard] = useState(initalGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((previousState) => {
    //         const updatedState = [...previousState.map(innerArray => [...innerArray])];
    //         updatedState[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedState;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {turns.map((row, rowIndex) =>  <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                        <li key={colIndex}>
                            <button onClick={onSelectSquare}>{playerSymbol}</button>
                        </li>
                    )}
                </ol>
            </li>)}
        </ol>
    );
}

export default GameBoard;