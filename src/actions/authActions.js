import { authService } from '../services';


// Handles user log in
const login = (email, password) => dispatch => {
    authService.login(dispatch, email, password);
};

// Handles user log out
const logout = () => dispatch => {
    authService.logout(dispatch);
};


export const authActions = { login, logout };






