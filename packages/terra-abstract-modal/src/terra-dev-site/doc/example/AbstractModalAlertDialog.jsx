import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import AbstractModal from 'terra-abstract-modal/lib/AbstractModal';
import classNames from 'classnames/bind';
import styles from './ExampleAbstractSize.module.scss';
import generalStyles from './AbstractModalDocCommon.module.scss';

const cx = classNames.bind(generalStyles);

class AbstractModalIsOpen extends React.Component {
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
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          closeOnOutsideClick={false}
          classNameModal={styles['fixed-size']}
          role="alertdialog"
        >
          <div className={cx('content-wrapper')}>
            <h1>Alert Dialog Modal</h1>
            <br />
            <p>
              The abstract modal can be used to create an alert dialog modal. You can use the role,
              {' '}
              <code>alertdialog</code>
              {' '}
              , to create a modal dialog that interrupts the users workflow to get a response, usually some sort of confirmation. This is different than a typical modal dialog in that it requires some user response, like &quot;Save&quot;, or &quot;Cancel&quot;, etc.
            </p>
            <p>You can close the modal by:</p>
            <ul>
              <li>- Pressing the ESC key</li>
              <li>- Clicking on the close button</li>
            </ul>
            <br />
            <button type="button" onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </AbstractModal>
        <button type="button" onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default AbstractModalIsOpen;
