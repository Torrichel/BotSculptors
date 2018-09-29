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
                    <title>Bot Development & Design</title>
                    <meta name="description" content="" />

                </Helmet>

                <div className="header_first_line">


                    <nav className="navBlock">

                        <NavLink to="/how-it-works">Как это работает?</NavLink>
                        <NavLink to="/team">Услуги</NavLink>
                        <NavLink to="/portfolio">Блог</NavLink>
                        <NavLink to="/about">О нас</NavLink>
                        <NavLink to="/about">Портфолио</NavLink>
                        <NavLink to="/about">Обзоры</NavLink>
                        <NavLink to="/about">Контакты</NavLink>

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

                        <div className="fill_brief">Заполнить бриф</div>
                        <div className="get_quote">Расчет стоимости</div>

                        <div className="phone">8(900) <b>333-22-11</b></div>
                        <div className="language">
                            <span>ENG</span>
                            <span className="active">РУС</span>
                        </div>

                    </div>

                </div>


            </header>

        );
    }
}



export default connect(null)(Header);