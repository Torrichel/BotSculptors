import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'




export class Header extends React.Component{

    constructor(props){
        super(props);
    }

    render(){



        return (

            <header>
                <nav>

                </nav>
            </header>


        );
    }
}



export default connect(null)(Header);