import { userConstants } from "../constants";

export const userReducer = (state = {}, {type, payload}) => {


    switch (type) {
        case userConstants.LIST_ALL_USERS_WEBSITE_SUCCESS:
            return payload;


        default:
            return state;
    }

};