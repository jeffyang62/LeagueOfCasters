import { KeyCodes, Actions } from '../constants';

const screens = {
    stance: 0,
    level: 1,
    timer: 2000,
    pattern: 0,
    stanceType: 0,  //0 = fire , 1 = wind , 2 = water
    points: 0,
}

//Separate reducers into SPRITE and position.
//Condesne reducer and remove deundancy
const screenSuccess = (state = screens, action) => {
    console.log(state);

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

        default:
            return state;
    }
}

export default screenSuccess;