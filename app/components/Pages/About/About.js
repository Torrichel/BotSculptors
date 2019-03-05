import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Emoji } from 'emoji-mart'

import Popup from '../Popup/Popup'

export class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
          popupImage: null,
          show: false
        }

        this.showModal = this.showModal.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }

    showModal(e) {
        const  imageLink = e.target.parentElement.parentElement.style.backgroundImage.replace('url(','').replace(')','').replace(/\"/gi, "");
        this.setState ({
          popupImage: imageLink,
          show: true
        })
    };


    handleClose() {
      this.setState({ show: false });
    }



    render() {

    const imagesLinks = [
         {
           link : "https://i.ibb.co/d2YcBnK/1280x960-1-min.jpg",
           name : "Svetlan Ovchinikov",
           status : "full-stack"
         },
         {
           link : "https://i.ibb.co/R24bSHH/Pozoyan-min.jpg",
           name : "Svetlan Ovchinikov",
           status : "full-stack"
         },
         {
           link :     "https://i.ibb.co/0CW91wc/Petrosyan-min.jpg",
           name : "Svetlan Ovchinikov",
           status : "full-stack"
         },
         {
           link : "https://i.ibb.co/MR8tDrb/Kurkhulishvili-min.jpg",
           name : "Svetlan Ovchinikov",
           status : "full-stack"
         },
         {
           link : "https://i.ibb.co/fq8brvV/Kuksin-min.jpg",
           name : "Svetlan Ovchinikov",
           status : "full-stack"
         },
         {
           link : "https://i.ibb.co/qFJ1Qkr/Korolov-min.jpg",
           name : "Svetlan Ovchinikov",
           status : "full-stack"
         },
         {
           link : "https://i.ibb.co/RP4YZ94/Ivanova-min.jpg",
           name : "Svetlan Ovchinikov",
           status : "full-stack"
         },
         {
           link : "https://i.ibb.co/jkxKHj0/Bokeria-min.jpg",
           name : "Svetlan Ovchinikov",
           status : "full-stack"
         }
      ];

      const teamList = imagesLinks.map(({link,name, status}, i) =>

            <div key={i} className="grid-item" style={ { backgroundImage: `url(${link})` } }>
              <div className="personName">
                <p className="name">{name}<br/><span className="status">{status}</span></p>
                <p className="moreInfo" onClick={this.showModal}>Узнать больше</p>
              </div>
            </div>

        );

        return (

          <div className="about">

          <Popup show={this.state.show} handleClose={this.handleClose} image={this.state.popupImage}/>

            <div className="slider" style={ { backgroundImage: `url(https://i.ibb.co/1zX1Cm4/about-page-bg.png)` } }>

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


export default connect(null)(About);
