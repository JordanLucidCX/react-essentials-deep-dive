import { useState } from "react";

function Player({initialName, symbol, isActivePlayer, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(editing => !editing);

        if (isEditing) {
            onChangeName(symbol, playerName)
        } 
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    const editablePlayerName = isEditing ? <input type="text" required value={playerName} onChange={handleChange}></input> : <span className="player-name">{playerName}</span>;
    const buttonText = isEditing ? "Save" : "Edit";

    return (
        <li className={isActivePlayer ? "active" : undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonText}</button>
        </li>
    );
}

export default Player;