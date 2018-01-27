// import { newHorizontal, newVertical, limit } from '../helper/position.js';
// import { KeyCodes, Actions } from '../constants';
// import Spritz from 'spritz.js';
// import RightSprite from 'assets/sprites/walkRight2.png';
import { checkDamage } from '../helper/damagePhase.js';

export function wonFight(){
    return {
        type: 'WIN_BATTLE'
    }
}

export function lostFight(){
    return {
        type: 'LOSE_BATTLE'
    }
}

/**
 * Thunk get afterbattle result
 */
export function getBattleResult(){
    return (dispatch ,getState) => {
        if(checkDamage(getState.cast, 1236)){
            dispatch(wonFight());
        } else {
            dispatch(lostFight());
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
