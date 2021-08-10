import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import Pills from 'terra-pills/lib/index';
import styles from '../PillListTestCommon.module.scss';

const cx = classNames.bind(styles);

const CollapsibleBasicPills = () => {
  const pillsData = [
    {
      label: 'asthma',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-asthma',
      isRemovable: true,
    },
    {
      label: 'bronchitis',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-bronchitis',
      isRemovable: true,
    },
    {
      label: 'fibro',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-fibro',
      isRemovable: true,
    },
    {
      label: 'allergies',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-allergies',
      isRemovable: true,
    },
    {
      label: 'hypertension',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-hypertension',
      isRemovable: true,
    },
    {
      label: 'cardiac',
      ref: useRef(),
      id: 'terra-pills-example-disclosure-removable-pill-cardiac',
      isRemovable: true,
    },
  ];
  const [pillsState, setPillsState] = useState(pillsData);
  const [isSingleLine, setIsSingleLine] = useState(true);

  const handleOnRemove = (pillKey, metaData) => {
    const pillsArray = pillsState;
    pillsArray.splice(metaData.index, 1);
    setPillsState([...pillsArray]);
  };

  return (
    <>
      <Pills
        ariaLabel="Example of Collapsible Basic Pills"
        isSingleLine={isSingleLine}
        onSelectRollUp={() => setIsSingleLine(false)}
        className={cx(['container', 'show-border', 'width-200'])}
        onRemove={handleOnRemove}

      >
        {pillsState.map((pill, index) => (
          <Pills.Pill
            label={pill.label}
            id={pill.id}
            key={pill.id}
            pillKey={pill.label}
            isRemovable={pill.isRemovable}
            metaData={{ index }}
            // eslint-disable-next-line no-param-reassign
            refCallback={(node) => { pill.ref.current = node; }}
          />
        ))}
      </Pills>
    </>
  );
};

export default CollapsibleBasicPills;
