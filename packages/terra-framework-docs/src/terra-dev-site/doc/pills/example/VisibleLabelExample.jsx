import React, { useState } from 'react';
import classNames from 'classnames/bind';
import FilterPills, { Pill } from 'terra-pills';

import styles from './FilterPillCommon.module.scss';

const cx = classNames.bind(styles);

const VisibleLabelExample = () => {
  const pillsData = [
    {
      label: 'asthma',
      labelCategory: 'respiratory',
      id: 'terra-filter-pills-removable-pill-asthma',
    },
    {
      label: 'bronchitis',
      labelCategory: 'respiratory',
      id: 'terra-filter-pills-removable-pill-bronchitis',
    },
    {
      label: 'fibro',
      labelCategory: 'respiratory',
      id: 'terra-filter-pills-removable-pill-fibro',
    },
  ];
  const [pills, setPills] = useState(pillsData);

  const handleOnRemove = (id, metaData) => {
    const pillsArray = pills;
    pillsArray.splice(metaData.index, 1);
    setPills([...pillsArray]);
  };

  return (
    <div className={cx('filter-group-panel')}>
      <span id="search-terms-fiter-label" className={cx('title-label')}>
        Patient Education Search Terms :
      </span>
      <FilterPills
        ariaLabelledBy="search-terms-fiter-label"
        ariaLabel="Patient Education Search Terms"
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
      {pills.length <= 0
        && <button type="button" onClick={() => setPills(pillsData)}>Reset the Example</button>}
    </div>
  );
};

export default VisibleLabelExample;
