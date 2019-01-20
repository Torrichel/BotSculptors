import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"


export class Popup extends Component {

  constructor(props, context) {
  super(props, context);
}

render() {

  return (
    <div>
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
        <div className="grid-container">
          <div className="info">
            <div className="name">Светлан Овчинников <br /> <span className="status">full-stack</span></div>
            <div className="text">Идейные соображения высшего порядка, а также рамки и место обучения кадров играет важную роль в формировании направлений прогрессивного развития. Разнообразный и богатый опыт начало повседневной работы по формированию позиции способствует подготовки и реализации систем массового участия.</div>
          </div>
          <div className="person-info">
            <img alt="person" src={this.props.image} />
            <div className="media">
              <span><img src="https://img.icons8.com/ios-glyphs/30/000000/phone.png" />8 (900) <b>333-22-11</b> </span>
              <span className="email">email.BotSculptors@gmail.com</span>
              <div className="social">

                  <Link to="https://github.com/BotSculptors" className="circle" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/GIt.png` } }></Link>
                  <div className="circle" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/fb.png)` } }></div>
                  <div className="circle" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/LINKEDIN.png)` } }></div>

              </div>
            </div>

          </div>
        </div>
        </Modal.Header>
      </Modal>
    </div>
  );
}
}


export default connect(null)(Popup);
