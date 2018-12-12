import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

// Import config file
import config from '../../../config'

// Import Helmet to take care about page head section
import {Helmet} from 'react-helmet'


import phoneIcon from '../../static/images/pages/header/phone.png'


export class Header extends React.Component{




    hireUs(){
        window.location = config.company;
    }

    render(){

        return (

            <header>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Bot Development & Design</title>
                    <meta name="description" content="" />

                </Helmet>

                <div className="header_first_line">


                    <nav className="navBlock">

                        <NavLink to="/how-it-works">How it works?</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                        {/*<NavLink to="/about">Reviews</NavLink>*/}

                        <NavLink to="/contact">Contact Us</NavLink>
                        <NavLink to="/about">About</NavLink>


                    </nav>

                </div>

                <div className="header_second_line">

                    <div className="logo_section">
                        <div className="sub_section_1">
                            <NavLink className="logo" to="/">
                                <img src="https://s3.amazonaws.com/botsculptors/website/logo.png" alt="Bot Sculptors" />
                            </NavLink>
                        </div>
                        <NavLink  to="/">
                        <div className="sub_section_2">
                            <div className="title">Bot <b>Sculptors</b></div>
                            <div className="slogan">Bot Development and Design</div>
                        </div>
                        </NavLink>
                    </div>



                    <div className="navBlock">

                        <div className="fill_brief">Fill Brief</div>
                        <div className="get_quote">Get Quote</div>

                        <a href='tel:+995571429373' className="phone">
                          <img src={phoneIcon} alt="phone"/>
                          (+995) <b>571 42 93 73</b>
                        </a>


                    </div>

                </div>


            </header>

        );
    }
}



export default connect(null)(Header);
