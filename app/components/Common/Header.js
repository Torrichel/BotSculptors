import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


import logo from '../../static/images/logo.png'


export class Header extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return (

            <header>

                <div className="headerIn">

                    <NavLink className="logo" to="/">

                        <img src={logo} alt="Bot Sculptors" />

                    </NavLink>

                    <nav className="navBlock">

                        <NavLink to="/team">Team</NavLink>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                        <NavLink to="/about">About</NavLink>

                    </nav>
                    <button className="contactUs">Contact Us</button>

                </div>


            </header>

        );
    }
}



export default connect(null)(Header);