import React, { useRef, useState } from 'react';
import Button from 'terra-button';
import Popup from 'terra-popup';
import List, { Item } from 'terra-list/lib/index';

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
      <Button text="Medications" onClick={handleButtonClick} refCallback={setButtonNode} aria-haspopup />
      <Popup
        isOpen={open}
        targetRef={getButtonNode}
        onRequestClose={handleRequestClose}
        isHeaderDisabled={false}
        isContentFocusDisabled
      >
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
      </Popup>
    </React.Fragment>
  );
}

export default PopupStandard;
