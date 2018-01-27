import { KeyCodes, Actions } from '../constants';


const myMove = {
    stroke: 0
}


//Separate reducers into SPRITE and position.
//Condesne reducer and remove deundancy
const castSuccess = (state = myMove, action) => {
    //console.log(action  );

    switch (action.type) {
        case 'MOVE_RIGHT':
            return {
                ...state,
                direction: true,
                ...state.d.splice(KeyCodes.RIGHT_ARROW, 1, true),
                isPlaying: true,
                //horizontal: action.position,
            }    
        case 'MOVE_LEFT':
            return {
                ...state,
                direction: false,
                ...state.d.splice(KeyCodes.LEFT_ARROW, 1, true),
                isPlaying: true,
                //horizontal: action.position,
            }
        case 'STOP_RIGHT':
            return {
                ...state,
                ...state.d.splice(KeyCodes.RIGHT_ARROW, 1, false),
                isPlaying: false,
                //horizontal: action.position,
            }
        case 'STOP_LEFT':
            return {
                ...state,
                ...state.d.splice(KeyCodes.LEFT_ARROW, 1, false),
                isPlaying: false,
                //horizontal: action.position,
            }
        case 'KEY_UP': 
            return {
                ...state,
                //d: [...state.d, action.key.which],
                ...state.d.splice(action.key.which, 1, action.isFalse),
                isPlaying: false,
            }
        case 'UPDATE_POSITION':
            return {
                ...state,
                horizontal: action.newPosition,
            }  

        case 'MOUSE_DOWN': 
            return {
                ...state,
                horizontal: action.newHorizontalPos,
                vertical: action.newVerticalPos,
            }
        case 'INITIAL_LOAD':
        console.log(action);
            return {
                ...state,
                sprite: action.sprites,
                limits: action.limits,
                   

            }     
        default:
            return state;
    }
}

export default castSuccess;