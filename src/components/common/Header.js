import React, { Component, Fragment }  from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';


// Import Helmet to take care about page head section
import { Helmet } from 'react-helmet';





export class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
            open: false
        };


        this.container = React.createRef();

    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                open: false
            });
        }
    };

    handleClick = () => {
        this.setState(state => {
            return {
                open: !state.open,
            };
        });
    };

    render(){


        let nav;

        if(window.location.pathname === '/'){

            nav = <nav className="navBlock">

            </nav>;

        } else{
            nav = <nav className="navBlock">
                <Link duration={1000} delay={100} offset={-60} smooth={true} to="/services">Services</Link>
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

                <div className={`header_first_line${this.state.open ? ' fixed' : ''}`}>

                    <div className="navBlock" ref={this.container}>

                        <i onClick={this.handleClick} className="material-icons">{this.state.open ? 'clear' : 'menu'}</i>


                        <nav className={`menu ${this.state.open ? 'show' : ''}`}>
                            <Link onClick={this.handleClick} duration={1000} delay={100} offset={-60} smooth={true} to="services">Services</Link>
                            <Link onClick={this.handleClick} duration={1000} delay={100} offset={-40} smooth={true} to="portfolio">Portfolio</Link>
                            <NavLink onClick={this.handleClick} to="/about">About</NavLink>
                        </nav>



                    </div>

                </div>

                <div className={`header_second_line${this.state.open ? ' fixed' : ''}`}>

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


                    {/* <div className="navBlock">

                        <div className="fill_brief">Fill Brief</div>
                        <div className="get_quote">Get Quote</div>

                    </div> */}


                </div>


            </header>

        );

    }


}
