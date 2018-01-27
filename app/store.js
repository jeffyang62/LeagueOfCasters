import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reduxCSS from 'redux-css';
import rootReducer from './reducers';

const configureStore = (initialState = { admin: false }, history) => {
    // List middleware here
    const middlewares = [
        routerMiddleware(history),
        thunk,
    ];
    // Add support for Redux dev tools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middlewares)
        )
    );

    return store;
};

export default configureStore;
