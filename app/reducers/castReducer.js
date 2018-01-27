import { KeyCodes, Actions } from '../constants';


const myMove = {
    stroke: 0
}


//Separate reducers into SPRITE and position.
//Condesne reducer and remove deundancy
const castSuccess = (state = myMove, action) => {
    console.log("Action is: ")
    console.log(action);

    switch (action.type) {
        case 'WIN_BATTLE':
            return {
                ...state,
                stroke: action.pattern,
                //horizontal: action.position,
            }    
        case 'LOSE_BATTLE':
            return {
                ...state,
                stroke: action.pattern,
                //horizontal: action.position,
            }    
        default:
            return state;
    }
}

export default castSuccess;