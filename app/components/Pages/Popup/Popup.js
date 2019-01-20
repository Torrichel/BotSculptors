import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'


export class Popup extends Component {

  constructor(props, context) {
  super(props, context);
}

render() {

  return (
    <div>
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
        <h4>Text in a modal</h4>
        <p>
          <img src={this.props.image}/>
        </p>
        <h4>Overflowing text to show scroll behavior</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
          ac consectetur ac, vestibulum at eros.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor.
        </p>
        </Modal.Header>
      </Modal>
    </div>
  );
}
}


export default connect(null)(Popup);
