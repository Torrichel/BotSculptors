import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Link } from "react-scroll"

// Import config file
import config from '../../../config'

// Import Helmet to take care about page head section
import { Helmet } from 'react-helmet'




export class Header extends React.Component{




    render(){

        let nav;

        if(window.location.pathname === '/'){

            nav = <nav className="navBlock">
                <Link offset={-60} smooth={true} to="services">Services</Link>
                <Link offset={-40} smooth={true} to="portfolio">Portfolio</Link>
                <NavLink to="/about">About</NavLink>
            </nav>;

        } else{
            nav = <nav className="navBlock">
                <a href="/#services">Services</a>
                <a href="/#portfolio">Portfolio</a>
                <NavLink to="/about">About</NavLink>
            </nav>;
        }

        return (

            <header>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Bot Development & Design</title>
                    <meta name="description" content="" />

                </Helmet>

                <div className="header_first_line">





                        {nav}




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


                    {/* <div className="navBlock">

                        <div className="fill_brief">Fill Brief</div>
                        <div className="get_quote">Get Quote</div>

                    </div> */}


                </div>


            </header>

        );
    }
}



export default connect(null)(Header);
