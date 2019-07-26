import React, { useRef, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import AbstractModal from 'terra-abstract-modal/lib/AbstractModal';
import classNames from 'classnames/bind';
import styles from './ExampleAbstractSize.module.scss';
import generalStyles from './AbstractModalDocCommon.module.scss';

const cx = classNames.bind(generalStyles);

/* eslint-disable-next-line react/prop-types */
const AlertDialogContent = ({ handleCloseModal }) => {
  const confirmBtn = useRef(null);

  useEffect(() => {
    confirmBtn.current.focus();
  }, []);

  return (
    <div id="alert-dialog-content" className={cx('content-wrapper')}>
      <h1>Alert Dialog Modal</h1>
      <br />
      <p>
        The abstract modal can be used to create an alert dialog modal. You can use the role,
        {' '}
        <code>alertdialog</code>
        {' '}
        , to create a modal dialog that interrupts the users workflow to get a response, usually some sort of confirmation.
      </p>
      <button ref={confirmBtn} type="button" onClick={handleCloseModal}>Confirm action</button>
      <button type="button" onClick={handleCloseModal}>Close Modal</button>
    </div>
  );
};

/* VoiceOver will not read the content of the modal dialog if the role attribute
 is set to `alertdialog` and ariaLabel is defined */
const ariaLabel = '';

class AbstractModalAlertDialog extends React.Component {
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
          ariaLabel={ariaLabel}
          aria-labelledby="alert-dialog-content"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          closeOnOutsideClick={false}
          classNameModal={styles['fixed-size']}
          role="alertdialog"
        >
          <AlertDialogContent handleCloseModal={this.handleCloseModal} />
        </AbstractModal>
        <button type="button" onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default AbstractModalAlertDialog;
