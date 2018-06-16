import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'




export class Footer extends React.Component{

    constructor(props){
        super(props);
    }

    render(){



        return (

            <footer>
                <div className="footerIn">
                    Copyright 2018
                </div>
            </footer>


        );
    }
}



export default connect(null)(Footer);