import React, { useRef, useState } from 'react';
import Popup from 'terra-popup';
import { SelectablePills } from '@cerner/terra-pills/lib/index';
import Spacer from 'terra-spacer';

const SelectablePill = () => {
  const pillsData = [
    {
      label: 'asthma',
      id: 'terra-pills-removable-pill-asthma',
    },
    {
      label: 'bronchitis',
      id: 'terra-pills-removable-pill-bronchitis',
    },
    {
      label: 'fibro',
      id: 'terra-pills-removable-pill-fibro',
    },
  ];
  const [pills] = useState(pillsData);
  const [openPillIndex, setOpenPillIndex] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const pillRef = useRef();

  const handleOnSelect = (ref, pillKey, metaData) => {
    pillRef.current = ref;
    setOpenPillIndex(metaData.index);
    setIsOpen(true);
  };

  const handleOnRequestClose = () => {
    setOpenPillIndex(undefined);
    setIsOpen(false);
  };

  const renderPopup = () => {
    if (openPillIndex === undefined) {
      return undefined;
    }
    const pillData = pills[openPillIndex];
    return (
      <Popup
        isOpen={isOpen}
        isArrowDisplayed
        targetRef={() => pillRef.current}
        onRequestClose={handleOnRequestClose}
        contentHeight="40"
        contentWidth="240"
      >
        <Spacer padding="medium" aria-labelledby={pillData.id}>
          - Sample Popup Content -
        </Spacer>
      </Popup>
    );
  };

  return (
    <>
      <SelectablePills
        ariaLabel="Example of Selectable Pill with a Popup"
        onSelect={handleOnSelect}
      >
        {pills.map((pill, index) => (
          <SelectablePills.Pill
            label={pill.label}
            id={pill.id}
            key={pill.id}
            pillKey={pill.label}
            metaData={{ index }}
            ariaExpanded={openPillIndex === index}
          />
        ))}
      </SelectablePills>
      {renderPopup()}
    </>
  );
};

export default SelectablePill;
