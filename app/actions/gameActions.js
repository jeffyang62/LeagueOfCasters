import { getTime, getStance, getStanceType, calculateScore } from '../helper/gameFunctions.js';
import { GAME_CODES } from '../constants';
import { checkDamage } from '../helper/damagePhase.js';

export function wonFight(pattern){
    console.log("win")
    return {
        type: 'WIN_BATTLE',
        pattern: pattern
    }
}

export function lostFight(){
    
    return {
        type: 'GAME_OVER'
    }
}

export function restartGame(){
    return {
        type: 'RESTART_GAME'
    }
}


export function StartInitial(timer, stance, stanceType) {    
    return {
        type: 'UPDATE',
        timer,
        stance,
        stanceType,
    }
}

export function updatePoints(points) {
    return {
        type: "RIGHT_PATTERN",
        points,
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

//needs to update scores
//needs to update levels after x amount of rounds.
//set random type of jutsu

export function startTimer() {
    return (dispatch, getState) => {
        //console.log(getState());
        
        getTime(getState().game.level)
            .then((timer) => {
                const stance = getStance(),
                    stanceType = getStanceType();          
                dispatch(startProgress(timer));
                dispatch(StartInitial(timer, 0, 0));
                dispatch(getNpcPattern(stance,stanceType));

                //get pattern form kenny code.
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
    return (dispatch ,getState) => {
        if(checkDamage(pattern, getState().game.pattern)){
            dispatch(startTimer());
            dispatch(updatePoints(calculateScore(getState().game.level,getState().game.points)));
        } else {
            //Lose
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
                clearInterval(id);
                dispatch(startTimer());
            } else {
                width++; 
                elem.style.width = width + '%'; 
            }
        }
    }
}

export function gameOver(){
    return (dispatch, getState) => {
        dispatch(lostFight());
    }
}
  
export function retry(){
    return (dispatch) => {
        dispatch(restartGame());
        dispatch(startGame());
    }
}