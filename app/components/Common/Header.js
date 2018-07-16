import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

// Import config file
import config from '../../../config'

// Import Helmet to take care about page head section
import {Helmet} from 'react-helmet'


import logo from '../../static/images/logo.png'


export class Header extends React.Component{

    constructor(props){
        super(props);
    }

    hireUs(){
        window.location = config.company;
    }

    render(){

        return (

            <header>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>My Custom title</title>
                    <meta name="description" content="" />

                </Helmet>

                <div className="headerIn">

                    <NavLink className="logo" to="/">

                        <img src={logo} alt="Bot Sculptors" />

                    </NavLink>

                    <nav className="navBlock">

                        <NavLink to="/how-it-works">How it works?</NavLink>
                        <NavLink to="/team">Team</NavLink>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                        <NavLink to="/about">About</NavLink>

                    </nav>
                    <button onClick={this.hireUs.bind(this)} className="contactUs">Hire Us!</button>

                </div>


            </header>

        );
    }
}



export default connect(null)(Header);