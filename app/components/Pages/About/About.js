import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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
           name : "Светлан Овчинников",
           status : "full-stack"
         },
         {
           link : "https://i.ibb.co/R24bSHH/Pozoyan-min.jpg",
           name : "Светлан Овчинников",
           status : "full-stack"
         },
         {
           link :     "https://i.ibb.co/0CW91wc/Petrosyan-min.jpg",
           name : "Светлан Овчинников",
           status : "full-stack"
         },
         {
           link : "https://i.ibb.co/MR8tDrb/Kurkhulishvili-min.jpg",
           name : "Светлан Овчинников",
           status : "full-stack"
         },
         {
           link : "https://i.ibb.co/fq8brvV/Kuksin-min.jpg",
           name : "Светлан Овчинников",
           status : "full-stack"
         },
         {
           link : "https://i.ibb.co/qFJ1Qkr/Korolov-min.jpg",
           name : "Светлан Овчинников",
           status : "full-stack"
         },
         {
           link : "https://i.ibb.co/RP4YZ94/Ivanova-min.jpg",
           name : "Светлан Овчинников",
           status : "full-stack"
         },
         {
           link : "https://i.ibb.co/jkxKHj0/Bokeria-min.jpg",
           name : "Светлан Овчинников",
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
                      <p>Мы - единый механизм,<br />
                        модулирующий и воплощающий <br />
                        Ваше будущее.
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
                Идейные соображения высшего порядка, а также рамки и место обучения кадров <br/>
                играет важную роль в формировании направлений прогрессивного развития.<br/>
                Разнообразный и богатый опыт начало повседневной работы по формированию <br/>
                позиции способствует подготовки и реализации систем массового участия.
              </div>
              <div className="call_to_action"><a href="#" className="btn-gradient">Читать полностью</a> </div>
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
