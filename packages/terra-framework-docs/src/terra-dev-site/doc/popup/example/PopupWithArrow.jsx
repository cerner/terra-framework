import React, { useRef, useState } from 'react';
import Button from 'terra-button';
import Popup from 'terra-popup';
import FilterPills, { Pill } from '@cerner/terra-pills';
import classNames from 'classnames/bind';
import styles from './PopupDocCommon.module.scss';

const cx = classNames.bind(styles);
function PopupArrow() {
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
      <Button text="Arrow Popup" onClick={handleButtonClick} refCallback={setButtonNode} />
      <Popup
        isOpen={open}
        onRequestClose={handleRequestClose}
        targetRef={getButtonNode}
        isArrowDisplayed
      >
        {showDetails ? (
          <div>
            <Button text="Hide more menu option" onClick={() => setShowDetails(false)} className={cx('popup-button')} />

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
          </div>
        )
          : (
            <Button text="Show more menu option" onClick={handlePopUpButton} className={cx('popup-button')} />
          )}
      </Popup>
    </React.Fragment>
  );
}

export default PopupArrow;
