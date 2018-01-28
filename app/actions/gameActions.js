import { getTime, getStance, getStanceType } from '../helper/gameFunctions.js';
import { GAME_CODES } from '../constants';

export function StartInitial(timer, stance, stanceType) {    
    return {
        type: 'UPDATE',
        timer,
        stance,
        stanceType,
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

                dispatch(StartInitial(timer, stance, stanceType));
                dispatch(getNpcPattern(stance,stanceType));
                setTimeout(() => {
                    //console.log("timer started...");
                    dispatch(startTimer());
                }, timer)                
            })
    }
}

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
  
function resetTimer() {
   
  }
  