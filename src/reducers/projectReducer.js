import { projectConstants } from "../constants";

export const projectReducer = (state = {}, {type, payload}) => {



    switch ( type ){


        case projectConstants.GET_PROJECT_WEBSITE_SUCCESS:
            return payload;


        default:
            return state;

    }


};