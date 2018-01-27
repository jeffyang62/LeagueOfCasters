import { KeyCodes, Actions } from '../constants';

const screens = {
    stance: 0,
    level: 1,
    timer: 0,
    pattern: 0,
    stanceType: 0,  //0 = fire , 1 = wind , 2 = water
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
        case 'CHANGE_SCREEN':
            return {
                ...state,
                stance: action.stance,

                //horizontal: action.position,
            }    

        default:
            return state;
    }
}

export default screenSuccess;