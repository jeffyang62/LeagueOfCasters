import { getTime, getStance, getStanceType } from '../helper/gameFunctions.js';

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

//needs to update scores
//needs to update levels after x amount of rounds.
//set random type of jutsu

export function startTimer() {
    return (dispatch, getState) => {
        //console.log(getState());
        
        getTime(getState().game.level)
            .then((timer) => {
                dispatch(startProgress(timer));
                dispatch(StartInitial(timer, getStance(), getStanceType()));
                //get pattern form kenny code.
            })
    }
}
//Start - Round 1... then start
export function startGame() {
    return (dispatch, getState) => {
       dispatch(startTimer());
    }
}

let id = 0;

export function correct() {
    return (dispatch, getState) => {


        clearInterval(id);
        dispatch(updatePoints(getState().game.points));
        dispatch(startTimer());
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
  