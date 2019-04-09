import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Link } from "react-scroll"


export class Footer extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        let nav;

        if(window.location.pathname === '/'){

            nav = <div className="nav_menu_top">
                    <Link offset={-60} smooth={true} to="services">Services</Link>
                    <Link offset={-40} smooth={true} to="portfolio">Portfolio</Link>
                    <NavLink to="/about">About</NavLink>
                </div>;

        } else{
            nav = <div className="nav_menu_top">
                    <a href="/#services">Services</a>
                    <a href="/#portfolio">Portfolio</a>
                    <NavLink to="/about">About</NavLink>
                </div>;
        }




        return (

            <footer>


                <div className="footer_first_line">

                  <div className="logo_section">
                      <div className="sub_section_1">
                          <NavLink className="logo" to="/">
                              <img src="https://s3.amazonaws.com/botsculptors/website/logo.png" alt="Bot Sculptors" />
                          </NavLink>
                      </div>

                      <div className="sub_section_2">
                          <NavLink  to="/">
                            <div className="title">Bot <b>Sculptors</b></div>
                            <div className="slogan">Bot Development and Design</div>
                          </NavLink>
                      </div>

                  </div>

                    <nav className="navBlock">

                        {nav}

                        <div className="nav_menu_bottom">

                            <div className="sub_menu_1">
                                {/*<div className="fill_brief">Fill Brief</div>*/}
                                {/*<div className="get_quote">Get Quote</div>*/}
                            </div>
                            <div className="sub_menu_2">

                                <a target="_blank" href="https://github.com/BotSculptors" target="_blank" className="circle" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/GIt.png` } }></a>

                                <a target="_blank" href="https://www.linkedin.com/company/botsculptors" className="circle" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/LINKEDIN.png)` } }></a>

                            </div>

                        </div>

                    </nav>

                </div>

                <div className="footer_second_line">

                    <div className="sub_block_1">
                        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                    </div>
                    <div className="sub_block_2">


                        <div className="email">
                            <i className="material-icons">mail_outline</i><a target="_top" href="mailto:info@botsculptors.com?Subject=Need%20help">info@botsculptors.com</a>
                        </div>

                    </div>


                    <div className="sub_block_3">
                        Copyright © 2019
                    </div>

                </div>


            </footer>

        );
    }
}



export default connect(null)(Footer);
