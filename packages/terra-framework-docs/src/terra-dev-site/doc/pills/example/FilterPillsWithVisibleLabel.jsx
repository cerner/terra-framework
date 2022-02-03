import React, { useState } from 'react';
import classNames from 'classnames/bind';
import FilterPills from 'terra-pills';

import styles from './FilterPillCommon.module.scss';

const cx = classNames.bind(styles);

const FilterPillsWithVisibleLabel = () => {
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

  const handleOnRemove = (pillKey, metaData) => {
    const pillsArray = pills;
    pillsArray.splice(metaData.index, 1);
    setPills([...pillsArray]);
  };

  return (
    <div className={cx('colored-div')}>
      <span id="titleLabel" className={cx('title-label')}>Patient Education Search Terms :</span>
      <FilterPills
        ariaLabelledBy="titleLabel"
        ariaLabel="Patient Education Search Terms"
        onRemove={handleOnRemove}
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
      {pills.length <= 0
        && <button type="button" onClick={() => setPills(pillsData)}>Reset</button>}
    </div>
  );
};

export default FilterPillsWithVisibleLabel;
