import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import { history } from "./history";


const middlware = applyMiddleware( thunk, createLogger(), routerMiddleware(history));

export const store = createStore(rootReducer, middlware);