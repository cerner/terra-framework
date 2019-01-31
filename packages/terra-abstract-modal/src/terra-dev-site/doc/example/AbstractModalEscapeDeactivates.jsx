import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import AbstractModal from 'terra-abstract-modal/lib/AbstractModal';
import styles from './ExampleAbstractSize.module.scss';

class AbstractModalEscapeDeactivates extends React.Component {
  constructor() {
    super();

    this.state = {
      isFocused: true,
      isOpen: false,
      escapeDeactivates: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleEscapeToggle = this.handleEscapeToggle.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress, false);
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  handleEscapeToggle() {
    if (!this.state.escapeDeactivates) {
      this.setState({ escapeDeactivates: true });
    } else {
      this.setState({ escapeDeactivates: false, isFocused: true });
    }
  }

  handleKeyPress(event) {
    if (event.keyCode === 27 && this.state.escapeDeactivates) {
      this.setState({ isFocused: false });
    }
  }

  render() {
    return (
      <div>
        <AbstractModal
          ariaLabel="Modal Esc Key Focus Escape Toggle"
          isOpen={this.state.isOpen}
          isFocused={this.state.isFocused}
          escapeDeactivates={this.state.escapeDeactivates}
          closeOnEsc={false}
          onRequestClose={this.handleCloseModal}
          classNameModal={styles['fixed-size']}
        >
          <div style={{
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            backgroundColor: '#90EE90',
            paddingLeft: '2em',
          }}
          >
            <h1>Modal Esc Key Focus Escape</h1>
            <br />
            <p>Toggle ability for esc key to escape focus trap:</p>
            <button type="button" onClick={this.handleEscapeToggle}>Toggle Focus Escape</button>
            <br />
            <br />
            <p>You can close the modal by:</p>
            <ul>
              <li>- Clicking outside the modal</li>
              <li>- Clicking on the close button</li>
            </ul>
            <button type="button" onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </AbstractModal>
        <button type="button" onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default AbstractModalEscapeDeactivates;
