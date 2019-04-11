// import axios from 'axios';
// import { baseURL, apiKey } from '../config';
// import { history } from '../helpers';
// import { fireAction, authActions } from "../actions";
// import { authConstants } from "../constants";
//
//
// // Get authentication headers for requests
// export const getHeaders = () => {
//
//     let headers = { 'ApiKey': apiKey };
//
//     try{
//
//         let user = JSON.parse(localStorage.getItem('user'));
//
//         if (user && user.authorization) {
//
//             return {
//                 ...headers,
//                 'Authorization': user.authorization
//             };
//
//         } else {
//             return headers;
//         }
//     } catch (e) {
//         console.log(e);
//         return headers;
//     }
//
//
// };
//
// // Get refreshToken
// export const getRefreshToken = () => {
//
//     let refreshToken = '';
//
//     try{
//
//         let user = JSON.parse(localStorage.getItem('user'));
//
//         if (user && user.refreshToken) {
//
//             return user.refreshToken;
//
//         } else {
//             return refreshToken;
//         }
//     } catch (e) {
//         console.log(e);
//         return refreshToken;
//     }
//
//
// };
//
// // Performs user log in
// export const login = (dispatch, email, password) => {
//
//     fireAction(dispatch, authConstants.LOGIN_REQUEST, email);
//
//     axios({
//         method: 'POST',
//         url: `${baseURL}auth/native`,
//         headers: getHeaders(),
//         data: {email, password}
//     })
//         .then(resp => {
//
//             try{
//
//
//                 let { firstName = ' ', lastName = ' '} = resp.data;
//                 resp.data['initials'] = `${firstName[0] || ''}${lastName[0] || ''}`;
//                 resp.data['fullName'] = `${firstName} ${lastName}`;
//
//                 let user = {
//                     authorization: resp.headers['authorization'],
//                     refreshToken: resp.headers['refresh-token'],
//                     user: resp.data
//                 };
//
//                 localStorage.setItem('user', JSON.stringify(user));
//
//                 history.push('/events');
//
//                 fireAction(dispatch, authConstants.LOGIN_SUCCESS, {});
//
//             } catch(e){
//                 fireAction(dispatch, authConstants.LOGIN_FAILURE, e);
//             }
//
//
//         })
//         .catch(e => {
//             fireAction(dispatch, authConstants.LOGIN_FAILURE, e);
//         });
//
// };
//
// // Performs user log out
// export const logout = dispatch => {
//
//     fireAction(dispatch, authConstants.LOGOUT_REQUEST, {});
//
//     try{
//         localStorage.removeItem('user');
//         history.push('/login');
//         fireAction(dispatch, authConstants.LOGOUT_SUCCESS, {});
//
//     } catch(e){
//         fireAction(dispatch, authConstants.LOGOUT_FAILURE, e);
//     }
//
// };
//
// // Checks if user is authorized
// export const isAuthenticated = () => {
//
//     try{
//         let { user, authorization, refreshToken } = JSON.parse(localStorage.getItem('user'));
//         return !!(authorization && refreshToken && user);
//     } catch (e) {
//         return false;
//     }
//
//
// };
//
// // Get user data
// export const getUserData = () => {
//
//     try{
//         return JSON.parse(localStorage.getItem('user'));
//     } catch (e) {
//         return false;
//     }
//
// };
//
// // Refresh token authentication
// export const refreshAuthentication = (dispatch, request, cb) => {
//     axios({
//         method: 'POST',
//         url: `${baseURL}auth/native`,
//         headers: {ApiKey: apiKey},
//         data: {refreshToken: getRefreshToken()}
//     })
//         .then(resp => {
//
//             // Updating user info in local storage
//             let user = getUserData();
//             user.authorization = resp.headers.authorization;
//             localStorage.setItem('user', JSON.stringify(user));
//
//             // Refreshing authentication and recursively performing same request
//             request(dispatch);
//         })
//         .catch(e => {
//
//             // Logging out user if refresh auth is not successful.
//             dispatch( authActions.logout() );
//         });
// };
//
//
// export const authService = {
//     login,
//     logout,
//     getHeaders,
//     getUserData,
//     isAuthenticated
// };
