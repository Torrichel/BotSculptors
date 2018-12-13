import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'



export class Footer extends React.Component{

    constructor(props){
        super(props);
    }

    render(){


        return (

            <footer>


                <div className="footer_first_line">

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

                    <nav className="navBlock">

                        <div className="nav_menu_top">
                          <a href="#services">Services</a>
                          <a href="#portfolio">Portfolio</a>
                            {/*<Link to="/about">Обзоры</Link>*/}
                            <Link to="/about">About</Link>
                        </div>

                        <div className="nav_menu_bottom">

                            <div className="sub_menu_1">
                                <div className="fill_brief">Fill Brief</div>
                                <div className="get_quote">Get Quote</div>
                            </div>
                            <div className="sub_menu_2">

                                <Link to="https://github.com/BotSculptors" className="circle" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/GIt.png` } }></Link>
                                <div className="circle" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/fb.png)` } }></div>
                                <div className="circle" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/LINKEDIN.png)` } }></div>

                            </div>

                        </div>

                    </nav>

                </div>

                <div className="footer_second_line">

                    <div className="sub_block_1">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>
                    <div className="sub_block_2">


                        <div className="email">
                            <i className="material-icons">mail_outline</i><span>info@botsculptors.com</span>
                        </div>

                    </div>


                    <div className="sub_block_3">
                        BotSculptors © 2018
                    </div>

                </div>


            </footer>

        );
    }
}



export default connect(null)(Footer);
