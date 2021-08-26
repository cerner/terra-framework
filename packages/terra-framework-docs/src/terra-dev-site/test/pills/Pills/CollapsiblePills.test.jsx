import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Pills from '@cerner/terra-pills/lib/index';
import styles from '../PillListTestCommon.module.scss';

const cx = classNames.bind(styles);

const CollapsibleBasicPills = () => {
  const pillsData = [
    {
      label: 'asthma',
      id: 'terra-pills-example-pill-asthma',
      isRemovable: false,
    },
    {
      label: 'bronchitis',
      id: 'terra-pills-example-pill-bronchitis',
      isRemovable: true,
    },
    {
      label: 'fibro',
      id: 'terra-pills-example-pill-fibro',
      isRemovable: true,
    },
    {
      label: 'allergies',
      id: 'terra-pills-example-pill-allergies',
      isRemovable: true,
    },
    {
      label: 'hypertension',
      id: 'terra-pills-example-pill-hypertension',
      isRemovable: false,
    },
    {
      label: 'cardiac',
      id: 'terra-pills-example-pill-cardiac',
      isRemovable: true,
    },
  ];
  const [pills, setPills] = useState(pillsData);
  const [isSingleLine, setIsSingleLine] = useState(true);

  const handleOnRemove = (pillKey, metaData) => {
    const pillsArray = pills;
    pillsArray.splice(metaData.index, 1);
    setPills([...pillsArray]);
  };

  return (
    <>
      <Pills
        ariaLabel="Example of Collapsible Basic Pills"
        isSingleLine={isSingleLine}
        onSelectRollUp={() => setIsSingleLine(false)}
        className={cx(['container', 'show-border'])}
        onRemove={handleOnRemove}

      >
        {pills.map((pill, index) => (
          <Pills.Pill
            label={pill.label}
            id={pill.id}
            key={pill.id}
            pillKey={pill.label}
            isRemovable={pill.isRemovable}
            metaData={{ index }}
          />
        ))}
      </Pills>
    </>
  );
};

export default CollapsibleBasicPills;
