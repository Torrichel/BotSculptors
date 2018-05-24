import axios from 'axios'

const baseURL = ' http://localhost:3000';


// Find bot users
export function findBotUsers(q, p){
    return {
        type: 'FIND_BOT_USERS',
        payload: axios.get( `${baseURL}/api/users?searchTerm=${q}&_page=${p}` )
    }
}

