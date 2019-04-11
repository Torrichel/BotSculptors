import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";


export class Popup extends Component {

  constructor(props, context) {
    super(props, context);
  }

render() {

  const { bio='', email='', firstName='', lastName='', photo='', title='', upwork='', github='', linkedIn='' } = this.props.user;
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

              <a className="email" target='_top' href={`mailto:${email}`}>{email}</a>

              <div className="social">

                  <a href={github} target="_blank" className="circle" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/GIt.png` } }></a>

                  {/*<a href={linkedIn} target="_blank" className="circle" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/LINKEDIN.png` } }></a>*/}



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
