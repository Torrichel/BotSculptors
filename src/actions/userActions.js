import { userService } from '../services';



const getUsersWebsite = () => dispatch => {

    userService.listAllWebsite(dispatch);

};


export const userActions = { getUsersWebsite };






