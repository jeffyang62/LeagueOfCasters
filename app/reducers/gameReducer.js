import { KeyCodes, Actions } from '../constants';

const gameStates = {
    stance: 0,
    level: 1,
    timer: 5000,
    pattern: 0,
    stanceType: 0,  //0 = fire , 1 = wind , 2 = water
    points: 0,
    isGameOver: false,
    bestScore: 0,
    intervalID: 0
}

//Separate reducers into SPRITE and position.
//Condesne reducer and remove deundancy
const screenSuccess = (state = gameStates, action) => {
    switch (action.type) {
        case 'START_GAME': 
            return {
                ...state,
            }
        case 'NEXT_ROUND':
            return {
                ...state,
                timer: action.timer,
                stance: action.stance,
                stanceType: action.stanceType,
                intervalID: 0,
            }
        case 'RIGHT_PATTERN':
            return {
                ...state,
                points: action.points,
                level: action.newLevel,
            }    
        case 'UPDATE_PATTERN':
            return {
                ...state,
                pattern: action.pattern
            }
        case 'NEW_BEST_SCORE':
            return {
                ...state,
                bestScore: action.points
            }
        case 'GAME_OVER':
            return {
                ...state,
                bestScore: action.score,
                isGameOver: true
            }
        case 'RESTART_GAME':
            return {
                ...state,
                points: 0,
                level: 1,
                timer: 5000,
                isGameOver: false,
                intervalID: 0
            }           
        default:
            return state;
    }
}

export default screenSuccess;