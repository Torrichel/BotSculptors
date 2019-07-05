import React from 'react';

import { NavLink, Link } from 'react-router-dom';
import { Link as ScrollTo } from 'react-scroll';
import { NavHashLink} from 'react-router-hash-link';


import styled from 'styled-components';

const Wrapper = styled.footer`

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin-top: 25px;

  .footer_first_line{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px ${props => props.theme.contentPaddingDesktop};
    height: 198px;

        
    ${({theme}) => theme.mobile`
        padding: 20px ${props => props.theme.contentPaddingMobile};
    `}
    
    ${({theme}) => theme.tablet`
        padding: 20px ${props => props.theme.contentPaddingTablet};
    `}
    


    background: ${props => props.theme.headerFirstLineColor};
    border-bottom: 2px solid #eceff1;


    .logo_section{
      display: flex;

      .sub_section_1{

        .logo{
          display: flex;

          img{
            height: 75px;
          }

        }

      }
      .sub_section_2{
        flex-shrink: 0;
        padding-left: 22px;
        padding-top: 22px;
        
        
            
    ${({theme}) => theme.mobile`
        display: none;
    `}
    
    ${({theme}) => theme.tablet`
        display: none;
    `}
    


        .title{
       
            margin-left: -1.5px;
            margin-top: -17px;
            height: 45px;
            width: 200px;
            color: ${props => props.theme.titleColor};
            font-family: "Open Sans";
            font-weight: 300;
            letter-spacing: -0.75px;
            font-size: 30px;


            b{
              font-family: inherit;
                font-weight: 600;
                letter-spacing: -0.75px;
            }
            
        }
        
        .slogan{
            font-family: "Open Sans";
            font-size: 14px;
            font-weight: 400;
            letter-spacing: -0.35px;
          
            color: ${props => props.theme.sloganColor};
            white-space: nowrap;
        }
      }

    }



    .navBlock{
      flex-flow: column nowrap;
      border: 0;
      flex-grow: 1;


      .nav_menu_top{
        display: flex;
        justify-content: flex-end;
        flex-grow: 1;
        flex-flow: row nowrap;
        margin-bottom: 10px;
        margin-top: 25px;
        


    
    ${({theme}) => theme.mobile`
        flex-flow: column;
        align-items: flex-end;
    `}
    
    ${({theme}) => theme.tablet`
        flex-flow: column;
        align-items: flex-end;
    `}
    



        a{
            margin-left: 50px;
            color: #000;
            font-family: "Open Sans";
            font-size: 14px;
            font-weight: 400;
            letter-spacing: -0.35px;


    
            ${({theme}) => theme.mobile`
                margin-left: 0;
            `}
            
            ${({theme}) => theme.tablet`
                margin-left: 0;
            `}
    

        }

        a:last-child{
          margin-right: 0;
        }



      }

      .nav_menu_bottom{

        display: flex;
        justify-content: flex-end;
        flex-grow: 1;
        margin-top: 15px;

        .sub_menu_1{

          display: flex;
          margin-top: 10px;

          .fill_brief, .get_quote{
            padding: 7px 17px;
            border: 2px solid #d5d9de;
            border-radius: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #2659b5;
            cursor: pointer;
            font-size: 19px;
          }

          .fill_brief{
            margin-right: 10px;
          }

        }
        .sub_menu_2{
          margin-left: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;

    ${({theme}) => theme.mobile`
        margin-left: 0;
    `}
    
    ${({theme}) => theme.tablet`
        margin-left: 0;
    `}

          .circle{
            width: 45px;
            height: 45px;
            border-radius: 50%;
            border: 2px solid #d5d9de;
            margin-left: 10px;
            background-repeat: no-repeat;
            background-position: center;
          }


        }



      }


    }





  }

  .footer_second_line{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px ${props => props.theme.contentPaddingDesktop};
    height: 90px;
    
    
        ${({theme}) => theme.mobile`
        padding: 10px ${props => props.theme.contentPaddingMobile};
    `}
    
    ${({theme}) => theme.tablet`
        padding: 10px ${props => props.theme.contentPaddingTablet};
    `}
    


    border-bottom: 0 solid #ccc;
    font-size: 19px;


    
    ${({theme}) => theme.mobile`
        flex-flow: column;
    `}
    
    ${({theme}) => theme.tablet`
        flex-flow: column;
    `}
    



    .sub_block_1{
    
        a{
            color: ${({theme}) => theme.titleColor};
          
            font-family: "Open Sans";
            font-size: 14px;
            font-weight: 400;
            
            letter-spacing: -0.35px;
          
        }
        
        

    }

    .sub_block_2{
      display: flex;
      margin-left: 35px;
      
      ${({theme}) => theme.mobile`
       margin-left: 0;
    `}
    
    ${({theme}) => theme.tablet`
        margin-left: 0;
    `}

      .phone{
        margin-right: 45px;
      }

      .phone, .email{
        display: flex;
        justify-content: center;
        align-items: center;

        a{
            color: #000000;
            font-family: "Open Sans";
            font-size: 15px;
            font-weight: 400;
            letter-spacing: -0.38px;
        }

        i{
          margin-right: 5px;
          opacity: .3;
        }
      }

    }
    
    .sub_block_3{

        color: #8a8f96;
        font-family: "Open Sans";
        font-size: 14px;
        font-weight: 400;
        letter-spacing: -0.35px;
    }
   





  }


`;


export const Footer = () => {

    const { pathname } = window.location;

    return (

        <Wrapper>


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

                    <div className="nav_menu_top">

                        { pathname === '/' ? <ScrollTo duration={1000} delay={100} offset={-60} smooth={true} to="services">Services</ScrollTo> :
                            <NavHashLink to="/#services">Services</NavHashLink> }


                        { pathname === '/' ? <ScrollTo duration={1000} delay={100} offset={-40} smooth={true} to="portfolio">Portfolio</ScrollTo> :
                            <NavHashLink to="/#portfolio">Portfolio</NavHashLink> }


                        <NavLink to="/about">About</NavLink>


                    </div>

                    <div className="nav_menu_bottom">

                        <div className="sub_menu_1">
                            {/*<div className="fill_brief">Fill Brief</div>*/}
                            {/*<div className="get_quote">Get Quote</div>*/}
                        </div>
                        <div className="sub_menu_2">

                            <Link target="_blank" to="https://github.com/BotSculptors" className="circle" style={{backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/GIt.png`}}/>

                            <Link target="_blank" to="https://www.linkedin.com/company/botsculptors" className="circle" style={{backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/LINKEDIN.png)`}}/>

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
                    Bot Sculptors © 2018-{new Date().getFullYear()}
                </div>

            </div>


        </Wrapper>

    );

};

