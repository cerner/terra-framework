import React, { useState } from 'react';
import classNames from 'classnames/bind';
import FilterPills from '@cerner/terra-pills/lib/index';

import styles from './FilterPillsTestCommon.module.scss';

const cx = classNames.bind(styles);

const SingleRemovableFilterPill = () => {
  const pillsData = [
    {
      label: 'asthma',
      labelCategory: 'respiratory',
      id: 'terra-filter-pills-removable-pill-asthma',
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
        ariaLabel="Example of Single Removable Filter Pill"
        onRemove={handleOnRemove}
        className={cx(['show-border'])}
      >
        {pills.map((pill, index) => (
          <FilterPills.Pill
            label={pill.label}
            labelCategory={pill.labelCategory}
            id={pill.id}
            key={pill.id}
            pillKey={pill.label}
            metaData={{ index }}
          />
        ))}
      </FilterPills>
      {pillsData.length <= 0
        && <button type="button" onClick={() => setPills(pillsData)}>Show Pill</button>}
    </>
  );
};

export default SingleRemovableFilterPill;
