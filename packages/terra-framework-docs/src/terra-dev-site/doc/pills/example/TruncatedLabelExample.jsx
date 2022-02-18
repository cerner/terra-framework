import React, { useState } from 'react';
import classNames from 'classnames/bind';
import FilterPills, { Pill } from '@cerner/terra-pills';

import styles from './FilterPillCommon.module.scss';

const cx = classNames.bind(styles);

const FilterPillsWithLongLabel = () => {
  const pillsData = [
    {
      label: 'bronchitis',
      labelCategory: 'respiratory',
      id: 'terra-filter-pills-selectable-removable-pill-bronchitis',
    },
  ];
  const [pills, setPills] = useState(pillsData);

  const handleOnRemove = (id, metaData) => {
    const pillsArray = pills;
    pillsArray.splice(metaData.index, 1);
    setPills([...pillsArray]);
  };

  return (
    <div className={cx('filter-pill-container')}>
      <FilterPills
        ariaLabel="Example of Filter Pill with long label"
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

export default FilterPillsWithLongLabel;
