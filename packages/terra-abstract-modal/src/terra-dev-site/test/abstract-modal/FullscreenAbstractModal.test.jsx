import React from 'react';
import AbstractModal from '../../../AbstractModal';
import './AbstractModalTestStyles.module.scss';

class ModalIsFullscreen extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <AbstractModal
          ariaLabel="Terra Modal"
          isOpen={this.state.isOpen}
          isFullscreen
          onRequestClose={this.handleCloseModal}
          classNameModal="test-background-class"
        >
          <div>
            <h1>Terra Modal</h1>
            <h2>Subtitle</h2>
            <hr />
            <p>The Terra Modal is appended to the document body.</p>
            <p>{'Modal is assigned a role of \'document\' for accessibility.'}</p>
            <button type="button" id="modal-button" onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </AbstractModal>
        <button type="button" id="modal-open-button" onClick={this.handleOpenModal}>Open isOpen modal</button>
      </div>
    );
  }
}


export default ModalIsFullscreen;
