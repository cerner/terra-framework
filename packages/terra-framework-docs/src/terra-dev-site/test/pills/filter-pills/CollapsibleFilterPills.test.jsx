import React, { useState } from 'react';
import classNames from 'classnames/bind';
import FilterPills from '@cerner/terra-pills/lib/index';
import styles from './FilterPillsTestCommon.module.scss';

const cx = classNames.bind(styles);

const CollapsibleFilterPills = () => {
  const pillsData = [
    {
      label: 'asthma',
      id: 'terra-filter-pills-pill-asthma',
    },
    {
      label: 'bronchitis',
      id: 'terra-filter-pills-bronchitis',
    },
    {
      label: 'fibro',
      id: 'terra-filter-pills-fibro',
    },
    {
      label: 'allergies',
      id: 'terra-filter-pills-allergies',
    },
    {
      label: 'hypertension',
      id: 'terra-filter-pills-hypertension',
    },
    {
      label: 'cardiac',
      id: 'terra-filter-pills-cardiac',
    },
  ];
  const [pills, setPills] = useState(pillsData);

  const handleOnRemove = (pillKey, metaData) => {
    const pillsArray = pills;
    pillsArray.splice(metaData.index, 1);
    setPills([...pillsArray]);
  };

  return (
    <>
      <FilterPills
        ariaLabel="Example of collapsed filter pills"
        onRemove={handleOnRemove}
        isCollapsible
        className={cx(['container', 'show-border', 'width-50'])}
      >
        {pills.map((pill, index) => (
          <FilterPills.Pill
            label={pill.label}
            id={pill.id}
            key={pill.id}
            pillKey={pill.label}
            metaData={{ index }}
          />
        ))}
      </FilterPills>
    </>
  );
};

export default CollapsibleFilterPills;
