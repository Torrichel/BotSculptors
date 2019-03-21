import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getUsers } from '../../../actions/actions'

import { Emoji } from 'emoji-mart'

import Popup from '../Popup/Popup'

export class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
          popupImage: null,
          show: false,
          users: []
        };

        props.dispatch( getUsers() );

        this.showModal = this.showModal.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }

    showModal(e) {
        const  id = e.target.id;
        const users = this.state.users;

        const currentUser = users.filter(e => e._id === id);

        this.setState ({
          popupUser: currentUser,
          show: true
        })
    };


    handleClose() {
      this.setState({ show: false });
    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            users: nextProps.users
        });


    }



    render() {

    const users = this.state.users || [];

        let teamList = users.map((user, i) =>


            <div key={i} className="grid-item" style={ { backgroundImage: `url(${user.photo})` } }>
                <div className="personName">
                    <p className="name">{user.firstName + ' ' + user.lastName}<br/><span className="status">{user.title}</span></p>
                    <p className="moreInfo" id={user._id} onClick={this.showModal}>Show More</p>
                </div>
            </div>


        );




        return (

          <div className="about">

          <Popup show={this.state.show} handleClose={this.handleClose} user={this.state.popupUser}/>

            <div className="slider" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/about-page-bg.jpg)` } }>

                <div className="info">

                    <div className="info-about">
                      <h3>Bot<span> Sculptors.</span></h3>
                      <p>Our goals are creating, <br />
                        deploying and maintaining<br />
                        customized solutions for your business.
                      </p>
                    </div>

              </div>

            </div>

            <div className="about-us">
              <div className="title">
                  <span className="back_text">ABOUT US</span>
                  <span className="front_text">ABOUT US</span>
              </div>
              <div className="description">

                  <p><b>BotSculptors</b> was born in spring 2018. We are the team of professional Software Developers (SD), Designers and UX specialists with huge experience in programming. Some of us worked in social networks with <b><i>Audience > 1 Million Active Users</i></b>, startups specialized on ChatBot development and CryptoCurrency projects. For more details about our projects, please, visit <a href='/#portfolio'>portfolio</a> section! <Emoji emoji={{ id: 'sunglasses', skin: 3 }} size={16} /></p>

                  <p>Our team combined that various set of skills all together. We really believe that synergy of Crypto Currencies and automated systems can change the world and make it the better place to live.</p>

                  <p>We are digital nomads and prefer to work remotely from different points of our amazing planet. Mobility allows us to cover a lot of USA and Eastern Europe time zones and makes communication with us much more comfortable. We’re the international team and speak fluently English, Russian, Chinese, German, French, Ukrainian and some other exotic local languages <Emoji emoji={{ id: 'smiley', skin: 3 }} size={16} /> </p>

                  <p>We’re focusing mainly on providing our clients with custom Bots or Cryptocurrency solutions, but we are always happy to help you with other programming challenges! Just reach us by clicking on Live Chat icon below. We're available 24/7.</p>



              </div>

              {/*<div className="call_to_action"><a href="#" className="btn-gradient">Читать полностью</a> </div>*/}
            </div>

            <div className="dream-team">
              <div className="grid-container">
                {teamList}
              </div>
            </div>

          </div>



        );
    }



}


const mapStateToProps = (state, ownProps) => {

    return Object.assign({}, ownProps, {
        users: state.usersReducer ? state.usersReducer : [],
    });




};


export default connect(mapStateToProps)(About);
