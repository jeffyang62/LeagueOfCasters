import { getTime, getStance, getStanceType, calculateScore, increaseLevel } from '../helper/gameFunctions.js';
import { GAME_CODES } from '../constants';
import { checkDamage } from '../helper/damagePhase.js';

export function wonFight(pattern){
    console.log("win")
    return {
        type: 'WIN_BATTLE',
        pattern: pattern
    }
}

export function lostFight(score){
    
    return {
        type: 'GAME_OVER',
        score
    }
}

export function restartGame(){
    return {
        type: 'RESTART_GAME'
    }
}


export function StartInitial(timer, stance, stanceType,intervalID) {    
    return {
        type: 'NEXT_ROUND',
        timer,
        stance,
        stanceType,
        intervalID,
    }
}

export function updatePoints(points, newLevel) {
    return {
        type: "RIGHT_PATTERN",
        points,
        newLevel,
    }
}


export function newBestScore(points){
    return {
        type: "NEW_BEST_SCORE",
        points
    }
}

export function fireAttack(){
    return {
        type: 'UPDATE_PATTERN', 
        pattern : GAME_CODES.FIRE_ATTACK  
    }
}

export function fireDefend(){
    return {
        type: 'UPDATE_PATTERN', 
        pattern: GAME_CODES.FIRE_DEFEND
    }
}

export function waterAttack(){
    return {
        type: 'UPDATE_PATTERN', 
        pattern: GAME_CODES.WATER_ATTACK
    }
}

export function waterDefend(){
    return {
        type: 'UPDATE_PATTERN', 
        pattern: GAME_CODES.WATER_DEFEND   
    }
}

export function airAttack(){
    return {
        type: 'UPDATE_PATTERN', 
        pattern: GAME_CODES.AIR_ATTACK
    }
}

export function airDefend(){
    return {
        type: 'UPDATE_PATTERN', 
        pattern: GAME_CODES.AIR_DEFEND  
    }
}

export function resetInterval(id) {
    return clearInterval(id);
}

//needs to update scores
//needs to update levels after x amount of rounds.
//set random type of jutsu

/**
 * Call when starting new round (Win/Loss)
 */
export function startTimer() {
    return (dispatch, getState) => {
        //console.log(getState());
        
        getTime(getState().game.level)
            .then((timer) => {
                const stance = 0,// getStance(),
                    stanceType = 0;// getStanceType();  

                dispatch(startProgress(timer));
                dispatch(StartInitial(timer, stance, stanceType ,id));
                dispatch(getNpcPattern(stance,stanceType));

            })
    }
}
//Start - Round 1... then start
export function getNpcPattern(stance, stanceType){
    return (dispatch, getState) => {
        switch(stanceType) {
            case 0:
                if(stance == 0){
                    return dispatch(fireAttack());
                } else {
                    return dispatch(fireDefend());                    
                }
            case 1:
                if(stance == 0){
                    return dispatch(waterAttack());
                } else {
                    return dispatch(waterDefend());                    
                }
            case 2:
                if(stance == 0){
                    return dispatch(airAttack());
                } else {
                    return dispatch(airDefend());                    
                }                
            default:
                return console.error("Get npc patter");
                
        }
    }
}

/**
 * Function triggers when start
 */
export function startGame() {
    return (dispatch, getState) => {
       dispatch(startTimer());
    }
}

let id = 0;


/**
 * Thunk get afterbattle result
 */
export function getBattleResult(pattern){
    return (dispatch, getState) => {
        console.log("My pattern: " + pattern);

        console.log("NPC pattern: " + getState().game.pattern);
        
        if(checkDamage(pattern, getState().game.pattern)){
            console.log("Win")
            dispatch(startTimer());
            dispatch(updatePoints(calculateScore(getState().game.level,getState().game.points), increaseLevel(getState().game.level)));
        } else {
            //Lose
            console.log("Lose")
            dispatch(gameOver());
        }
        clearInterval(id);
    }
}

export function startProgress() {
    return (dispatch, getState) => {
        const timer = getState().game.timer;
        //console.log(timer);
        const elem = document.getElementById("myBar"); 
        let width = 1;
        id = setInterval(frame, timer/100);
        function frame() {
            if (width >= 100) {
                    // dispatch(resetInterval(id));
                dispatch(gameOver());
            } else {
                width++; 
                elem.style.width = width + '%'; 
            }
        }
    }
}

export function gameOver() {

    console.log("Game over...");
    return (dispatch, getState) => {
        let score = 0;
        /*
        if(getState().game.bestScore <= getState().game.points){
           dispatch(newBestScore(getState().game.points)); 
        }*/ 
        clearInterval(id);
        getState().game.bestScore > getState().game.points ? score = getState().game.bestScore : score = getState().game.points;

        dispatch(lostFight(score));
    }
}
  
export function retry(){
    return (dispatch) => {
        dispatch(restartGame());
        dispatch(startGame());
    }
}