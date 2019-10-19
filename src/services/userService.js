import { userConstants } from "../constants";
import { fireAction } from "../actions";

const baseURL = 'https://api.botsculptors.com';

// Lists all events
export const listAllWebsite = (dispatch) => {

    fireAction(dispatch, userConstants.LIST_ALL_USERS_WEBSITE_REQUEST, {});

    fetch( `${baseURL}/get-public-users` )

        .then(response => {
            const contentType = response.headers.get("content-type");

            if(contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
        .then(json => {

            if( !json.error && json.hasOwnProperty('data') ){
                fireAction(dispatch, userConstants.LIST_ALL_USERS_WEBSITE_SUCCESS, json.data);
            } else{
                fireAction(dispatch, userConstants.LIST_ALL_USERS_WEBSITE_FAILURE, json.message);
            }

        })
        .catch(error => {
            fireAction(dispatch, userConstants.LIST_ALL_USERS_WEBSITE_FAILURE, error);
        });


};


export const userService = {
    listAllWebsite
};
