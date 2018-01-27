import { getTime, getStance, getStanceType } from '../helper/gameFunctions.js';

export function StartInitial(timer, stance, stanceType) {

    console.log(stance);
    
    return {
        type: 'UPDATE',
        timer,
        stance,
        stanceType,
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
                dispatch(StartInitial(timer, getStance(), getStanceType()));
                setTimeout(() => {
                    //console.log("timer started...");
                    dispatch(startTimer());
                }, timer)                
            })
    }
}

export function startGame() {
    return (dispatch, getState) => {
       dispatch(startTimer());
    }
}
  
function resetTimer() {
   
  }
  