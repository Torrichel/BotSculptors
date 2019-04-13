import { projectConstants } from "../constants";

export const projectReducer = (state = {}, {type, payload}) => {



    switch ( type ){


        case projectConstants.GET_PROJECT_WEBSITE_SUCCESS:
            return payload;

        case projectConstants.LIST_ALL_PROJECTS_WEBSITE_SUCCESS:
            return {websiteProjects: payload};


        default:
            return state;

    }


};