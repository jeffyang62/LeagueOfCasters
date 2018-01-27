// import { newHorizontal, newVertical, limit } from '../helper/position.js';
// import { KeyCodes, Actions } from '../constants';
// import Spritz from 'spritz.js';
// import RightSprite from 'assets/sprites/walkRight2.png';
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



//function sshould accept an image as sprite,
//need to add delete sprite to clear memory.
export function initialLoad(props) {

        const sprites = Spritz('#SPRITE', {
            picture: [{
                srcset: RightSprite, 
                width: 338,
                height: 90, 
            }],
            steps: 5,
        }).flip();
    
        
        return (dispatch) => {
            limit(window.innerWidth)
                .then(
                    (limits) => {
                        dispatch(initLoad(limits, sprites));
                    }
                )
        }
    }
