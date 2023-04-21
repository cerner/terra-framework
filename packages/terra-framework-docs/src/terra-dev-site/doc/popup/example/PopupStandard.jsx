import React, { useRef, useState } from 'react';
import Button from 'terra-button';
import Popup from 'terra-popup';
import classNames from 'classnames/bind';
import List, { Item } from 'terra-list/lib/index';
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
      <Button text="Patient Details" onClick={handleButtonClick} refCallback={setButtonNode} />
      <Popup
        isOpen={open}
        targetRef={getButtonNode}
        onRequestClose={handleRequestClose}
        isHeaderDisabled={false}
        isContentFocusDisabled
        contentWidth={240}
        contentHeight={240}
      >
        <div>
          Medications for Patient John Doe
        </div>
        {showDetails ? (
          <div>
            <Button text="Hide Medications" onClick={() => setShowDetails(false)} className={cx('popup-button')} />
            <List role="listbox" aria-label="example-label">
              <Item
                key="listitem"
                isSelectable
              >
                Lisinopril
              </Item>
              <Item
                key="selected"
                isSelectable
                isSelected
              >
                Amoxicillin
              </Item>
            </List>
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
