import axios from 'axios'

const baseURL = 'https://botsculptors.com/api/v1/projects';


// Get project
export function getProject(name){
  axios.get( `${baseURL}/${name}` ).then((res) => {console.log("axios get",res)})
    return {
        type: 'GET_PROJECT',
        payload: axios.get( `${baseURL}/${name}` )
    }
}
