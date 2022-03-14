import React, { useState } from 'react';
import Button from 'terra-button';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import Popup from 'terra-popup';
import { Placeholder } from '@cerner/terra-docs';
import classNames from 'classnames/bind';
import styles from './PopupModalContent.module.scss';

const cx = classNames.bind(styles);

function ModalContainer(props) {
  const [open, setOpen] = useState(false);

  const handlePopupButtonClick = () => {
    setOpen(true);
  };

  const handlePopupRequestClose = () => {
    setOpen(false);
  };
  const { disclosureManager } = props;
  return (
    <React.Fragment>
      <div className={cx('content-container')}>
        <Popup
          isArrowDisplayed
          isOpen={open}
          onRequestClose={handlePopupRequestClose}
          targetRef={() => document.getElementById('popup-in-modal')}
        >
          <Placeholder title="Popup Content" />
        </Popup>
        <Button id="popup-in-modal" text="Popup In Modal" onClick={handlePopupButtonClick} />
        <br />
        <br />
        <Button className="close-disclosure" text="Close Disclosure" onClick={disclosureManager.closeDisclosure} />
      </div>
    </React.Fragment>
  );
}

ModalContainer.propTypes = {
  disclosureManager: disclosureManagerShape,
};

export default withDisclosureManager(ModalContainer);
