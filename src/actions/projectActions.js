import { projectService } from '../services';



const getProjectWebsite = (url) => dispatch => {

    projectService.getProjectWebsite(dispatch, url);

};


export const projectActions = { getProjectWebsite };






