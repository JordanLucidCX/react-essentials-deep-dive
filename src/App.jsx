import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((currentActivePlayer) => currentActivePlayer == 'X' ? 'O' : currentActivePlayer);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player activePlayer={activePlayer} initialName="Player 1" symbol="X" />
          <Player activePlayer={activePlayer} initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;