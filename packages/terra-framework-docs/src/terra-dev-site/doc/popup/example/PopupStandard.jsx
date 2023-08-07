import React, { useRef, useState, useEffect } from 'react';
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

  useEffect(() => {
    if (open) {
      document.querySelector('#root').setAttribute('inert', 'true');
    } else {
      document.querySelector('#root').removeAttribute('inert');
    }
  }, [open]);

  return (
    <React.Fragment>
      <div>
        To prevent focus from shifting with up/down arrow keys when virtual cursor mode is on in Jaws use inert attribute as shown in the example.
        Using inert makes the content outside the popup inaccessible to screen readers and keyboard interactions while the popup is active, ensuring keyboard focus is trapped within the popup for better accessibility.
      </div>
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
