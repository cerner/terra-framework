import React, { useRef, useState } from 'react';
import Popup from 'terra-popup';
import classNames from 'classnames/bind';
import styles from './PopupDocCommon.module.scss';

const cx = classNames.bind(styles);

function PopupStandard() {
  const buttonElement = useRef();
  const [open, setOpen] = useState(false);

  const setButtonNode = (node) => {
    buttonElement.current = node;
  };

  const getButtonNode = () => buttonElement.current;

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleRequestClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button type="button" className={cx('popup-button')} onClick={handleButtonClick} ref={setButtonNode}>Medications</button>
      <Popup
        isOpen={open}
        targetRef={getButtonNode}
        onRequestClose={handleRequestClose}
        isHeaderDisabled={false}
      >
        <label htmlFor="html">Medications for patient John Doe</label>
      </Popup>
    </React.Fragment>
  );
}

export default PopupStandard;
