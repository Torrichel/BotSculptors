import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

// Import config file
import config from '../../../config'

// Import Helmet to take care about page head section
import {Helmet} from 'react-helmet'


import logo from '../../static/images/logo.png'
import phoneIcon from '../../static/images/pages/header/phone.png'


export class Header extends React.Component{

    constructor(props){
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
       this.state = {
           active: false,
       };
    }

    toggleClass() {
        let currentState = this.state.active;
        this.setState({ active: !currentState });
    };

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
                                <img src={logo} alt="Bot Sculptors" />
                            </NavLink>
                        </div>
                        <div className="sub_section_2">
                            <div className="title">Bot <b>Sculptors</b></div>
                            <div className="slogan">Bot Development and Design</div>
                        </div>
                    </div>



                    <div className="navBlock">

                        <div className="fill_brief">Fill Brief</div>
                        <div className="get_quote">Get Quote</div>

                        <a href='tel:+995571429373' className="phone">
                          <img src={phoneIcon} alt="phone"/>
                          (+995) <b>571 42 93 73</b>
                        </a>
                        <div className="language">
                            <span onClick={this.toggleClass} className={this.state.active ? 'active' : null }>РУС</span>
                            <span onClick={this.toggleClass} className={!this.state.active ? 'active' : null }>ENG</span>
                        </div>

                    </div>

                </div>


            </header>

        );
    }
}



export default connect(null)(Header);
