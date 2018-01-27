import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import castReducer from 'reducers/castReducer.js';
import GameReducer from 'reducers/gameReducer.js';

const rootReducer = combineReducers({
    // Insert reducers here
    game: GameReducer,
    cast: castReducer
});

export default rootReducer;
