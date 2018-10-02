import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'

import logo from '../../static/images/logo.png'


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
                                <img src={logo} alt="Bot Sculptors" />
                            </NavLink>
                        </div>
                        <div className="sub_section_2">
                            <div className="title"><span>Bot </span><b>Sculptors</b></div>
                            <div className="slogan">Bot Development and Design</div>
                        </div>
                    </div>

                    <nav className="navBlock">

                        {/*<div className="nav_menu_top">*/}
                            {/*<Link to="/how-it-works">Как это работает?</Link>*/}
                            {/*<Link to="/team">Услуги</Link>*/}
                            {/*<Link to="/portfolio">Блог</Link>*/}
                            {/*<Link to="/about">О нас</Link>*/}
                            {/*<Link to="/about">Портфолио</Link>*/}
                            {/*<Link to="/about">Обзоры</Link>*/}
                            {/*<Link to="/about">Контакты</Link>*/}
                        {/*</div>*/}

                        {/*<div className="nav_menu_bottom">*/}

                            {/*<div className="fill_brief">Заполнить бриф</div>*/}
                            {/*<div className="get_quote">Расчет стоимости</div>*/}

                        {/*</div>*/}

                    </nav>

                </div>

                <div className="footer_second_line">



                </div>


            </footer>

        );
    }
}



export default connect(null)(Footer);