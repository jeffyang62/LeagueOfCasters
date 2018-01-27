import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import GameReducer from 'reducers/gameReducer.js';

const rootReducer = combineReducers({
    // Insert reducers here
    game: GameReducer,

});

export default rootReducer;
