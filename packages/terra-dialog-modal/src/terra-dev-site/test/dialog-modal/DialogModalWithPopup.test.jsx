import React from 'react';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header';
import ActionFooter from 'terra-action-footer';
import Popup from 'terra-popup';
import classNames from 'classnames/bind';
import DialogModal from '../../../DialogModal';
import styles from './DialogModalWithPopup.test.module.scss';

const cx = classNames.bind(styles);

class DefaultDialogModal extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      isPopupOpen: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  handleButtonClick() {
    this.setState({ isPopupOpen: true });
  }

  handleRequestClose() {
    this.setState({ isPopupOpen: false });
  }

  setButtonNode(node) {
    this.parentNode = node;
  }

  getButtonNode() {
    return this.parentNode;
  }

  render() {
    const text = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      'Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.',
      'Integer congue feugiat ultricies.',
      ' Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.',
      'Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.',
      ' Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.',
      'Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.',
      'Nam vehicula, arcu vitae egestas porttitor,',
      'turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.'];
    return (
      <div>
        <DialogModal
          ariaLabel="Dialog Modal"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          header={<ActionHeader title="Action Header used here" onClose={this.handleCloseModal} />}
          footer={<ActionFooter start="Footer Goes here" />}
        >
          <p>{text}</p>
          <Popup
            isOpen={this.state.isPopupOpen}
            targetRef={this.getButtonNode}
            onRequestClose={this.handleRequestClose}
          >
            <div className={cx('popup-content')}>
              <p>{text}</p>
              <button type="button">Test Button</button>
              <p>{text}</p>
            </div>
          </Popup>
          <Button text="Toggle popup" onClick={this.handleButtonClick} refCallback={this.setButtonNode} />
          <p>{text}</p>
        </DialogModal>
        <Button id="trigger-dialog-modal" text="Trigger Dialog Modal" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

export default DefaultDialogModal;
