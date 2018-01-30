import React from 'react';
import '../css/gameover.css';

function gameover(props) {
console.log(props);
    return (
        <div>
            <div className="gameoverbox">
                <h2>Game over</h2>
                <h4>Level: {props.game.level}</h4>
                <h4>Score: {props.game.points}</h4>
                <h4>High Score: {props.game.bestScore}</h4>
                <div className="row">
                <button onClick={() => props.restartGame()}>Retry</button>
                </div>
            </div>
        </div>
    );
}

export default gameover;
