import React, { useRef, useState } from 'react';
import Button from 'terra-button';
import Popup from 'terra-popup';
import classNames from 'classnames/bind';
import styles from './PopupDocCommon.module.scss';

const cx = classNames.bind(styles);

function PopupStandard() {
  const buttonElement = useRef();
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

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

  const handlePopUpButton = () => {
    setShowDetails(true);
  };

  return (
    <React.Fragment>
      <Button text="Patient Details" onClick={handleButtonClick} refCallback={setButtonNode} title="This is a pop up" />
      <Popup
        isOpen={open}
        targetRef={getButtonNode}
        onRequestClose={handleRequestClose}
        isHeaderDisabled={false}
        isContentFocusDisabled
      >
        <div>
          Medications for Patient John Doe
        </div>
        {showDetails ? (
          <div>
            <Button text="Hide Medications" onClick={() => setShowDetails(false)} className={cx('popup-button')} />
            <ul>
              <li>lisinopril</li>
              <li>amoxicillin</li>
            </ul>
          </div>
        )
          : (
            <Button text="Show Medications" onClick={handlePopUpButton} className={cx('popup-button')} />
          )}
      </Popup>
    </React.Fragment>
  );
}

export default PopupStandard;
