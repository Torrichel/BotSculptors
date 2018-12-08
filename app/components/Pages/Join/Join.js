import React from 'react'
import { connect } from 'react-redux'
import {Skill_app} from './Skill-app/containers/Skill_app.js'


export class Join extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {


        return (

            <div className="JoinForm">
                <Skill_app/>
            </div>


        );
    }



}


export default connect(null)(Join);
