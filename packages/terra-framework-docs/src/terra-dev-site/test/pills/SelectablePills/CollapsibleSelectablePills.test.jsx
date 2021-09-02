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
      id: 'terra-pills-pill-asthma',
      isRemovable: true,
    },
    {
      label: 'bronchitis',
      id: 'terra-pills-pill-bronchitis',
      isRemovable: true,
    },
    {
      label: 'fibro',
      id: 'terra-pills-pill-fibro',
      isRemovable: true,
    },
    {
      label: 'allergies',
      id: 'terra-pills-pill-allergies',
      isRemovable: true,
    },
    {
      label: 'hypertension',
      id: 'terra-pills-pill-hypertension',
      isRemovable: true,
    },
    {
      label: 'cardiac',
      id: 'terra-pills-pill-cardiac',
      isRemovable: true,
    },
  ];
  const [pills, setPills] = useState(pillsData);
  const [openPillIndex, setOpenPillIndex] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [isSingleLine, setIsSingleLine] = useState(true);
  const pillRef = useRef();

  const handleOnRemove = (pillKey, metaData) => {
    const pillsArray = pills;
    pillsArray.splice(metaData.index, 1);
    setPills([...pillsArray]);
  };

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
        ariaLabel="Example of a Selectable and Removable Pill with a Popup"
        onSelect={handleOnSelect}
        onRemove={handleOnRemove}
        isSingleLine={isSingleLine}
        onSelectRollUp={() => setIsSingleLine(false)}
        className={cx(['container', 'show-border', 'width-50'])}
      >
        {pills.map((pill, index) => (
          <SelectablePills.Pill
            label={pill.label}
            id={pill.id}
            key={pill.id}
            pillKey={pill.label}
            isRemovable
            metaData={{ index }}
            ariaExpanded={openPillIndex === index}
          />
        ))}
      </SelectablePills>
      {renderPopup()}
    </>
  );
};

export default CollapsibleSelectablePills;
