import React, { useRef, useState } from 'react';
import Popup from 'terra-popup';
import Button from 'terra-button';

function PopupStandard() {
  const buttonElement = useRef();
  const [open, setOpen] = useState(false);

  const setButtonNode = (node) => {
    buttonElement.current = node;
  };

  const getButtonNode = () => buttonElement.current;

  const handleButtonClick = () => {
    if (!open) {
      document.querySelector('#root').setAttribute('inert', 'true');
    }
    setOpen(true);
  };

  const handleRequestClose = () => {
    setOpen(false);
    document.querySelector('#root').removeAttribute('inert');
    buttonElement.current.focus();
  };

  return (
    <React.Fragment>
      <div>
        To prevent focus from shifting with up/down arrow keys when virtual cursor mode is on in Jaws use inert attribute as shown in the example.
        Using inert makes the content outside the popup inaccessible to screen readers and keyboard interactions while the popup is active, ensuring keyboard focus is trapped within the popup for better accessibility.
        <p>This example shows how to pass custom aria label for screen readers.</p>
      </div>
      <Button text="Medications" onClick={handleButtonClick} refCallback={setButtonNode} />
      <Popup
        isOpen={open}
        targetRef={getButtonNode}
        onRequestClose={handleRequestClose}
        isHeaderDisabled={false}
        isContentFocusDisabled
      >
        <label htmlFor="html">Medications for patient John Doe</label>
      </Popup>
    </React.Fragment>
  );
}

export default PopupStandard;
