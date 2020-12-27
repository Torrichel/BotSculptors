import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { HashLink } from 'react-router-hash-link';

import {fireAction, userActions} from '../../../actions';

//
// import Popup from '../Popup/Popup';

import { Header, Main, Title, Footer } from "../../common";
import axios from 'axios';


import styled from 'styled-components';
import _ from "lodash";

const baseURL = 'https://dev.botsculptors.com';



export const Wrapper = styled.div`

  .slider{
 
  
      display: flex;
      align-items: center;
      padding: 0 ${({theme}) => theme.contentPaddingDesktop};
      height: 656px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;


      
      ${({theme}) => theme.mobile`
            height: 300px;
            padding: 0 ${({theme}) => theme.contentPaddingMobile};   
      `}

      ${({theme}) => theme.tablet`
           height: 350px;
           padding: 0 ${({theme}) => theme.contentPaddingTablet};
      `}



      .info {
        display: flex;
        justify-content: space-around;
        flex-direction: column;

      p{
        color: #fff;
        font-size: 36px;
        font-weight: 600;
        line-height: 48px;
        font-family: "Open Sans";
      }
      
      a{
      font-family: "Open Sans";
      }
        
        

        
        
        

   
      }

    
    
      ${({theme}) => theme.mobile`
           height: 450px!important;
      `}

  }

  .about-us {

    
     padding: 70px ${({theme}) => theme.contentPaddingDesktop};
      
      
      ${({theme}) => theme.mobile`
            
            padding: 50px ${props => props.theme.contentPaddingMobile};
      `}
      
    
      ${({theme}) => theme.tablet`
            
            padding: 50px ${props => props.theme.contentPaddingTablet};
      `}

    display: flex;
    flex-direction: column;
    align-items: center;


    .description{

      width: 600px;
      
    ${({theme}) => theme.mobile`
        width: 100%;
    `}
    
    ${({theme}) => theme.tablet`
        width: 100%;
    `}

      
      p{
        color: #7d8794;
        font-family: "Open Sans";
        font-size: 15px;
        font-style: italic;
        line-height: 24px;
        letter-spacing: 0.15px;
      }
      
      p:last-child{
      margin-bottom: 0;
      }
    }
    .call_to_action:hover{
      background-color: #0C3376;
    }
    .call_to_action {
      margin-top: 25px;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: 180px;
      height: 45px;
      background-color: #265ab5;
      border-radius: 50px;

      a {
        text-decoration: none;
        font-size: 15px;
        color: #fff;
      }
    }
  }
  .dream-team {
    
    align-items: center;
    justify-content: center;
    
    
    
      padding: 30px ${({theme}) => theme.contentPaddingDesktop};
      padding-top: 0;
      
      ${({theme}) => theme.mobile`
            padding-top: 0;
            padding: 30px ${props => props.theme.contentPaddingMobile};
      `}
      
    
      ${({theme}) => theme.tablet`
            padding-top: 0;
            padding: 30px ${props => props.theme.contentPaddingTablet};
      `}




    .grid-container {

      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 5px;
      
      
      ${({theme}) => theme.mobile`
            grid-template-columns: 1fr;
      `}
      
    
      ${({theme}) => theme.tablet`
            grid-template-columns: 1fr;
      `}



      .grid-item {

        filter: grayscale(50%);
        position: relative;


        .bg{
          width: 100%;
          height: 100%;
          position: absolute;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          top: 0;
          left: 0;
        }

      }

      .grid-item:hover {

        //.bg{
        //  opacity: .9;
        //  cursor: pointer;
        //}


      }


      .grid-item::before {
        content: "";
        padding-bottom: 100%;
        display: inline-block;
      }


    }







  }


`;


export class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
          popupImage: null,
          popupUser: {},
          show: false,
          users: []
        };

        // props.dispatch( userActions.getUsersWebsite() );

        this.handleClose = this.handleClose.bind(this);
        this.fetchTeam = this.fetchTeam.bind(this);

    }

    showModal = user => {

        this.setState ({
          popupUser: user,
          show: true
        });

    };


    handleClose() {
      this.setState({ show: false });
    }




    componentDidMount(){
        window.scrollTo(0, 0);
    }

    async componentWillMount() {


        const users = await this.fetchTeam();
        this.setState({ users });

    }

    fetchTeam(){
        
        return new Promise(async (resolve, reject) => {

            axios.get(`${baseURL}/users/list-public`)
                .then(res => {

                    const publicUsers = _.get(res, "data") || [];
                    return !publicUsers.length ? reject('Users not found') : resolve(publicUsers);

                })
                .catch(err => reject(err));
            
            
        });
        
    }



    render() {

        const { users = [] } = this.state;



        return (

            <Fragment>
                <Header {...this.props} />

                <Main>

                    <Wrapper className="about">


                        <div className="slider" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/about-page-bg.jpg)` } }>

                            <div className="info">

                                <div className="info-about">
                                    <p>Our goals are creating, <br />
                                        deploying and maintaining<br />
                                        customized solutions for your business.
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="about-us">

                            <Title id='aboutUs' marginBottom={'10'} backText='ABOUT US' frontText='ABOUT US' />


                            <div className="description">

                                <p><b>BotSculptors</b> was born in spring 2018. We are the team of professional Software Developers (SD), Designers and UX specialists with huge experience in programming. Some of us worked in social networks with <b><i>Audience > 1 Million Active Users</i></b>, startups specialized on ChatBot development and CryptoCurrency projects. For more details about our projects, please, visit <HashLink to='/#portfolio'>portfolio</HashLink> section!</p>

                                <p>Our team combined that various set of skills all together. We really believe that synergy of Crypto Currencies and automated systems can change the world and make it the better place to live.</p>

                                <p>We are digital nomads and prefer to work remotely from different points of our amazing planet. Mobility allows us to cover a lot of USA and Eastern Europe time zones and makes communication with us much more comfortable. We’re the international team and speak fluently English, Russian, Chinese, German, French, Ukrainian and some other exotic local languages. </p>

                                <p>We’re focusing mainly on providing our clients with custom Bots or Cryptocurrency solutions, but we are always happy to help you with other programming challenges! Just reach us by clicking on Live Chat icon below. We're available 24/7.</p>



                            </div>

                        </div>

                        <div className="dream-team">
                            <div className="grid-container">

                                {users.length && users.map((user, i) => (<div key={i} className="grid-item" id="{user.sub}">
                                    <div className='bg' style={ { backgroundImage: `url(${user.picture})` } }/>
                                </div>) )}

                            </div>
                        </div>

                    </Wrapper>

                </Main>

                <Footer />

            </Fragment>


        );
    }



}


export default connect(null)(About);
