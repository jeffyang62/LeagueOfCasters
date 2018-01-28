import { KeyCodes, Actions } from '../constants';

const gameStates = {
    stance: 0,
    level: 1,
    timer: 10000,
    pattern: 0,
    stanceType: 0,  //0 = fire , 1 = wind , 2 = water
    points: 0,
    isGameOver: false
}

//Separate reducers into SPRITE and position.
//Condesne reducer and remove deundancy
const screenSuccess = (state = gameStates, action) => {
    switch (action.type) {
        case 'START_GAME': 
            return {
                ...state,
            }
        case 'UPDATE':
            return {
                ...state,
                timer: action.timer,
                stance: action.stance,
                stanceType: action.stanceType,
            }
        case 'RIGHT_PATTERN':
            return {
                ...state,
                points: action.points,

                //horizontal: action.position,
            }    
        case 'UPDATE_PATTERN':
            return {
                ...state,
                pattern: action.pattern
            }
        case 'GAME_OVER':
            return {
                ...state,
                isGameOver: true
            }
        case 'RESTART_GAME':
            return {
                ...state,
                points: 0,
                level: 1,
                timer: 10000,
                isGameOver: false
            }
        default:
            return state;
    }
}

export default screenSuccess;