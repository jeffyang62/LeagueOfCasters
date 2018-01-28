// import { newHorizontal, newVertical, limit } from '../helper/position.js';
// import { KeyCodes, Actions } from '../constants';
// import Spritz from 'spritz.js';
  import { checkDamage } from '../helper/damagePhase.js';

export function wonFight(pattern){
    return {
        type: 'WIN_BATTLE',
        pattern: pattern
    }
}

export function lostFight(pattern){
    return {
        type: 'LOSE_BATTLE',
        pattern: pattern
    }
}

/**
 * Thunk get afterbattle result
 */
export function getBattleResult(pattern){
    return (dispatch ,getState) => {
        if(checkDamage(pattern, 1236)){
            dispatch(wonFight(pattern));
        } else {
            dispatch(lostFight(pattern));
        }
    }
}


