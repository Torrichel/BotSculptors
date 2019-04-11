import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { projectReducer } from "./projectReducer";
import { userReducer } from "./userReducer";
import { authReducer } from "./authReducer";


const rootReducer = combineReducers({
    projectReducer,
    userReducer,
    auth: authReducer,
    routing: routerReducer
});

export default rootReducer;