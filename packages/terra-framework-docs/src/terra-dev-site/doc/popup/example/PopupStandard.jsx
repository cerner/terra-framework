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
      <Button text="Default Popup" onClick={handleButtonClick} refCallback={setButtonNode} title="This is a pop up" />
      <Popup
        isOpen={open}
        targetRef={getButtonNode}
        onRequestClose={handleRequestClose}
        isHeaderDisabled={false}
        isContentFocusDisabled
      >
        <div>
          Click on the button to view details
        </div>
        {showDetails ? (
          <div>
            <Button text="Hide Details" onClick={() => setShowDetails(false)} className={cx('popup-button')} />
            <div>
              This is the example of a default pop up.
            </div>
          </div>
        )
          : (
            <Button text="Show Details" onClick={handlePopUpButton} className={cx('popup-button')} />
          )}
      </Popup>
    </React.Fragment>
  );
}

export default PopupStandard;
