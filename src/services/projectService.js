import { baseURL } from '../config';

import { projectConstants } from "../constants";
import { fireAction } from "../actions";


// Lists all events
export const getProjectWebsite = (dispatch, url) => {

    fireAction(dispatch, projectConstants.GET_PROJECT_WEBSITE_REQUEST, {});


    fetch( `${baseURL}/projects/${url}` )

        .then(response => {
            const contentType = response.headers.get("content-type");

            if(contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
        .then(json => {

            if( !json.error && json.hasOwnProperty('data') ){
                fireAction(dispatch, projectConstants.GET_PROJECT_WEBSITE_SUCCESS, json.data);
            } else{
                fireAction(dispatch, projectConstants.GET_PROJECT_WEBSITE_FAILURE, json.message);
            }


        })
        .catch(error => {
            fireAction(dispatch, projectConstants.GET_PROJECT_WEBSITE_FAILURE, error);
        });


};


export const projectService = {
    getProjectWebsite
};
