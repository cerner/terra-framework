import React, { useRef, useState } from 'react';
import Popup from 'terra-popup';
import { SelectablePills } from '@cerner/terra-pills/lib/index';

const SingleSelectablePill = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pillRef = useRef();

  const handleOnSelect = () => {
    setIsOpen(true);
  };

  const handleOnRequestClose = () => {
    setIsOpen(false);
  };

  const renderPopup = () => (
    <Popup
      isOpen={isOpen}
      isArrowDisplayed
      targetRef={() => pillRef.current}
      onRequestClose={handleOnRequestClose}
      contentHeight="40"
      contentWidth="240"
    >
      <p> Sample Pop Up text</p>
    </Popup>
  );

  return (
    <>
      <SelectablePills
        ariaLabel="Example of a Selectable Pill with a Popup"
        onSelect={handleOnSelect}
      >
        <SelectablePills.Pill
          label="Asthma"
          id="selectabla-asthma"
          key="selectable-asthma"
          refCallback={(node) => { pillRef.current = node; }}
        />
      </SelectablePills>
      {renderPopup()}
    </>
  );
};

export default SingleSelectablePill;
