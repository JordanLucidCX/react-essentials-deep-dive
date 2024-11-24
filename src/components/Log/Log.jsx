export default function Log({ gameTurns }) {
    return (
        <ol id="log">
            {gameTurns.length > 0 && gameTurns.map(turn => <li key={`${turn.square.row}${turn.square.column}`} className="highlighted">{`${turn.player} selected (${turn.square.row},${turn.square.column})`}</li>)}
        </ol>
    )
}