import { combineReducers } from 'redux'
import { LOCATION_CHANGE, routerReducer, routerMiddleware } from 'react-router-redux'

function projectReducer(state={}, action){


    switch ( action.type ){


        // Clearing state on Location Change
        //case LOCATION_CHANGE:
        //return Object.assign(state, {trip: {}});


        // Get project success
        case 'GET_PROJECT_FULFILLED':
            return action.payload.data.data;


        // Get trip failure
        // case 'GET_TRIP_REJECTED':
        //     return Object.assign(state, {
        //         trip: {}
        //     });

        default:
            return state;

    }

}



const rootReducer = combineReducers({
    projectReducer: projectReducer,
    routing: routerReducer
});

export default rootReducer;
