import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { Link } from "react-router-dom";


export class Popup extends Component {



render() {

  const { bio='', email='', firstName='', lastName='', photo='', title='', github='' } = this.props.user;
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

              <Link className="email" target='_top' to={`mailto:${email}`}>{email}</Link>

              <div className="social">

                  <Link to={github} target="_blank" className="circle" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/GIt.png` } }/>



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
