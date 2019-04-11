import axios from 'axios'

const baseURL = 'https://botsculptors.com/api/v1';


// Get project
export function getProject(name){
    return {
        type: 'GET_PROJECT',
        payload: axios.get( `${baseURL}/projects/${name}` )
    }
}

// Get users
export function getUsers(){
    return {
        type: 'GET_USERS',
        payload: axios.get( `${baseURL}/users/list` )
    }
}
