import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import movementReducer from 'reducers/movementReducer.js';
import spriteReducer from 'reducers/spriteReducer.js';
import screenReducer from 'reducers/screenReducer.js';
import castReducer from 'reducers/castReducer.js';


const rootReducer = combineReducers({
    // Insert reducers here
    position: movementReducer,
    sprite: spriteReducer,
    screen: screenReducer,
    cast: castReducer
});

export default rootReducer;
