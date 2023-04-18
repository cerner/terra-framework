import React, { useRef, useState } from 'react';
import Button from 'terra-button';
import Popup from 'terra-popup';
import FilterPills, { Pill } from '@cerner/terra-pills';

function PopupArrow() {
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

  const pillsData = [
    {
      label: 'Menu Option-1',
      id: 'terra-filter-pills-option1',
    },
    {
      label: 'Menu Option-2',
      id: 'terra-filter-pills-option1',
    },
  ];
  const [pills, setPills] = useState(pillsData);

  const handleOnRemove = (id, metaData) => {
    const pillsArray = pills;
    pillsArray.splice(metaData.index, 1);
    setPills([...pillsArray]);
  };

  return (
    <React.Fragment>
      <Button text="Show More Options" onClick={handleButtonClick} refCallback={setButtonNode} />
      <Popup
        isOpen={open}
        onRequestClose={handleRequestClose}
        targetRef={getButtonNode}
        isArrowDisplayed
      >

        <FilterPills
          onRemove={handleOnRemove}
        >
          {pills.map((pill, index) => (
            <Pill
              label={pill.label}
              labelCategory={pill.labelCategory}
              id={pill.id}
              key={pill.id}
              metaData={{ index }}
            />
          ))}
        </FilterPills>

      </Popup>
    </React.Fragment>
  );
}

export default PopupArrow;
