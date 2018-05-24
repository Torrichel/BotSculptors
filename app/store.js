import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware'
import { routerMiddleware } from 'react-router-redux'


import rootReducer from './reducers/reducers'
import AppRouter, {history} from './routes/AppRouter'

// Middleware
const middlware = applyMiddleware( promise(), thunk,createLogger(), routerMiddleware(history) );

// Reducers
export const store = createStore(rootReducer, middlware);


ReactDOM.render(<AppRouter store={store} />, document.getElementById('app'));