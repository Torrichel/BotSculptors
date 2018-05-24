import { combineReducers } from 'redux'
import { LOCATION_CHANGE, routerReducer, routerMiddleware } from 'react-router-redux'

function botUsersReducer(state=[], action){

    switch ( action.type ){

        // Clearing state on Location Change
        case LOCATION_CHANGE:
            return [];

        // Find bot users success
        case "FIND_BOT_USERS_FULFILLED":


            return {
                type: action.type,
                payload: action.payload
            };

        // Find bot users rejected
        case "FIND_BOT_USERS_REJECTED":


            return {
                type: action.type,
                payload: action.payload
            };


        default:
            return state;

    }

}



const rootReducer = combineReducers({
    botUsersReducer,
    routing: routerReducer
});

export default rootReducer;