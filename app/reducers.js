import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import movementReducer from 'reducers/movementReducer.js';
import spriteReducer from 'reducers/spriteReducer.js';
import screenReducer from 'reducers/screenReducer.js';

const rootReducer = combineReducers({
    // Insert reducers here
    position: movementReducer,
    sprite: spriteReducer,
    screen: screenReducer,
});

export default rootReducer;
