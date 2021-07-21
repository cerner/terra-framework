import React, { useRef, useState } from 'react';
import Popup from 'terra-popup';
import classNames from 'classnames/bind';
import { SelectablePills } from 'terra-pills/lib/index';
import Spacer from 'terra-spacer';
import styles from '../PillTestCommon.module.scss';

const cx = classNames.bind(styles);

const DisclosureAndRemovablePill = () => {
  const pillsData = [
    {
      label: 'asthma',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-asthma',
    },
    {
      label: 'bronchitis',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-bronchitis',
    },
    {
      label: 'fibro',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-fibro',
    },
    {
      label: 'fibro1',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-fibro1',
    },
    {
      label: 'fibro2',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-fibro2',
    },
  ];
  const [pillsState, setPillsState] = useState(pillsData);
  const [openPillIndex, setOpenPillIndex] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnRemove = (pillKey, metaData) => {
    const pillsArray = pillsState;
    pillsArray.splice(metaData.index, 1);
    setPillsState([...pillsArray]);
  };

  const handleOnSelect = (pillKey, metaData) => {
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
    const pillData = pillsState[openPillIndex];
    return (
      <Popup
        isOpen={isOpen}
        isArrowDisplayed
        targetRef={() => pillData.ref.current}
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
        ariaLabel="Example of a Basic Pill with a Popup"
        onSelect={handleOnSelect}
        onRemove={handleOnRemove}
        className={cx(['container', 'show-border', 'width-200'])}
      >
        {pillsState.map((pill, index) => (
          <SelectablePills.Pill
            label={pill.label}
            id={pill.id}
            pillKey={pill.label}
            isRemovable
            metaData={{ index }}
            // eslint-disable-next-line no-param-reassign
            refCallback={(node) => { pill.ref.current = node; }}
            ariaExpanded={openPillIndex === index}
          />
        ))}
      </SelectablePills>
      {renderPopup()}
    </>
  );
};

export default DisclosureAndRemovablePill;
