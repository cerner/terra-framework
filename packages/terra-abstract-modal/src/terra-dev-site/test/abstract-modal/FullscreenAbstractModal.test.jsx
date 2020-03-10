import React from 'react';
import TimeInput from 'terra-time-input';
import classNames from 'classnames/bind';
import AbstractModal from '../../../AbstractModal';
import './AbstractModalTestStyles.module.scss';
import styles from './temp.module.scss';

const cx = classNames.bind(styles);

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
    const fixedArray = ['modal-manager', 'height-690', 'width-1120'];
    return (
      <div>
        <AbstractModal
          ariaLabel="Terra Modal"
          isOpen={this.state.isOpen}
          isFullscreen
          onRequestClose={this.handleCloseModal}
          classNameModal={cx(fixedArray)}
        >
          <div>
            <h1>Terra Modal</h1>
            <h2>Subtitle</h2>
            <hr />
            <p>The Terra Modal is appended to the document body.</p>
            <p>{'Modal is assigned a role of \'document\' for accessibility.'}</p>
            <button type="button" id="modal-button" onClick={this.handleCloseModal}>Close Modal</button>
          </div>
          <TimeInput
            name="time-input-value"
            onChange={this.handleTimeChange}
            showSeconds
          />
        </AbstractModal>
        <button type="button" id="modal-open-button" onClick={this.handleOpenModal}>Open isOpen modal</button>
        <TimeInput
          name="time-input-value"
          onChange={this.handleTimeChange}
          showSeconds
        />
      </div>
    );
  }
}

export default ModalIsFullscreen;
