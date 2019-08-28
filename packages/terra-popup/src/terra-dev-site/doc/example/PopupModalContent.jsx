import React from 'react';
import Button from 'terra-button';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import Popup from 'terra-popup/lib/Popup';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import classNames from 'classnames/bind';
import styles from './PopupModalContent.module.scss';

const cx = classNames.bind(styles);

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handlePopupButtonClick = this.handlePopupButtonClick.bind(this);
    this.handlePopupRequestClose = this.handlePopupRequestClose.bind(this);
    this.state = { open: false };
  }

  handlePopupButtonClick() {
    this.setState({ open: true });
  }

  handlePopupRequestClose() {
    this.setState({ open: false });
  }

  render() {
    const { disclosureManager } = this.props;

    return (
      <div className={cx('content-container')}>
        <Popup
          isArrowDisplayed
          isOpen={this.state.open}
          onRequestClose={this.handlePopupRequestClose}
          targetRef={() => document.getElementById('popup-in-modal')}
        >
          <Placeholder title="Popup Content" />
        </Popup>
        <Button id="popup-in-modal" text="Popup In Modal" onClick={this.handlePopupButtonClick} />
        <br />
        <br />
        <Button className="close-disclosure" text="Close Disclosure" onClick={disclosureManager.closeDisclosure} />
      </div>
    );
  }
}

ModalContainer.propTypes = {
  disclosureManager: disclosureManagerShape,
};

export default withDisclosureManager(ModalContainer);
