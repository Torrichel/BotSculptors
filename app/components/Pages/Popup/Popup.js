import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"


export class Popup extends Component {

  constructor(props, context) {
  super(props, context);
}

render() {

  const { bio,email,firstName,lastName,photo,title,upwork } = this.props.user !== undefined ? this.props.user[0] : [];
  return (
    <div>
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
        <div className="grid-container">
          <div className="info">
            <div className="name">{firstName + ' ' + lastName}<br /> <span className="status">{title}</span></div>
            <div className="text">{bio}</div>
          </div>
          <div className="person-info">
            <img alt="person" src={photo} />
            <div className="media">
              <span className="email">{email}</span>
              <div className="social">

                  <a href="https://github.com/BotSculptors" target="_blank" className="circle" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/GIt.png` } }></a>
                  <a href={upwork} target="_blank"><div className="circle" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/fb.png)` } }></div></a>
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
