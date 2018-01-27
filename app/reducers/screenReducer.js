import { KeyCodes, Actions } from '../constants';

const screens = {
    screen: 0,
}

//Separate reducers into SPRITE and position.
//Condesne reducer and remove deundancy
const screenSuccess = (state = screens, action) => {
    //console.log(action  );

    switch (action.type) {
        case 'CHANGE_SCREEN':
            return {
                ...state,
                screen: action.screen,
                //horizontal: action.position,
            }    

        default:
            return state;
    }
}

export default screenSuccess;