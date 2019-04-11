import { authConstants } from "../constants";

export const authReducer = (state = {}, {type, payload}) => {


    switch (type) {
        case authConstants.LOGIN_SUCCESS:
            return { isLoggedIn: true };

        case authConstants.LOGIN_FAILURE:
            return { isLoggedIn: false };


        default:
            return state;
    }

};