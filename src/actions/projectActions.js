import { projectService } from '../services';



const getProjectWebsite = (url) => dispatch => {

    projectService.getProjectWebsite(dispatch, url);

};

const listAllProjectsWebsite = () => dispatch => {

    projectService.listAllProjectsWebsite(dispatch);

};


export const projectActions = { getProjectWebsite, listAllProjectsWebsite };






