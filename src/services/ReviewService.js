import { baseURLNew } from '../config';

import { projectConstants } from "../constants";
import { fireAction } from "../actions";
import rp from 'request-promise';


// Returns all projects
const list = () => {

    return new Promise((resolve, reject) => {

        const options = {
            method: 'GET',
            url: `${baseURLNew}/reviews/list`,
            json: true
        };

        rp(options)
            .then(res => {
                return resolve(res);
            })
            .catch(e => reject(e));
    });

};


export const ReviewService = {
    list
};
