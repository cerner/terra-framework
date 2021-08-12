import React, { useRef, useState } from 'react';
import Popup from 'terra-popup';
import classNames from 'classnames/bind';
import { SelectablePills } from '@cerner/terra-pills/lib/index';
import Spacer from 'terra-spacer';
import styles from '../PillListTestCommon.module.scss';

const cx = classNames.bind(styles);

const CollapsibleSelectablePills = () => {
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
      label: 'hypertension',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-hypertension',
    },
    {
      label: 'cardiac',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-cardiac',
    },
    {
      label: 'allergies',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-allergies',
    },
  ];
  const [pillsState, setPillsState] = useState(pillsData);
  const [openPillIndex, setOpenPillIndex] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [isSingleLine, setIsSingleLine] = useState(true);

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
        ariaLabel="Example of a Selectable and Removable Pill with a Popup"
        onSelect={handleOnSelect}
        onRemove={handleOnRemove}
        isSingleLine={isSingleLine}
        onSelectRollUp={() => setIsSingleLine(false)}
        className={cx(['container', 'show-border', 'width-200'])}
      >
        {pillsState.map((pill, index) => (
          <SelectablePills.Pill
            label={pill.label}
            id={pill.id}
            key={pill.id}
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

export default CollapsibleSelectablePills;
