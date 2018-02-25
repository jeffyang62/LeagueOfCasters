import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import App from 'containers/App';

import configureStore from './store';

// Global styles
import 'sanitize.css/sanitize.css';
import 'materialize-css/dist/js/materialize.min.js';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';

import 'jquery/dist/jquery.min.js';

//import 'pattern-lock-js/dist/patternlock.min.js';
//import 'pattern-lock-js/dist/patternlock.css';

import './assets/fonts/fonts.css';
import './main.css';


// If not using redux:
//render(
//    <BrowserRouter>
//        <App />
//    </BrowserRouter>,
//    document.getElementById('app')
//);



// If using redux:
// Create redux store with history
const initialState = {};
const history = createHistory(); 
const store = configureStore(initialState, history);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter> 
    </Provider>,
    document.getElementById('app')
);
