import axios from 'axios'

const baseURL = 'https://botsculptors.com/api/v1/projects';


// Get project
export function findBotUsers(name){
    return {
        type: 'GET_PROJECT',
        payload: axios.get( `${baseURL}/${name}` )
    }
}
