import React, { useState } from 'react';
import classNames from 'classnames/bind';
import FilterPills from 'terra-pills';
import { Placeholder } from '@cerner/terra-docs';

import styles from './FilterPillCommon.module.scss';

const cx = classNames.bind(styles);

const AppliedFiltersExample = () => {
  const pillsData = [];
  for (let pillCount = 1; pillCount < 11; pillCount += 1) {
    const pillData = {
      label: `Selection ${pillCount}`,
      labelCategory: 'Category',
      id: `terra-filter-pills-removable-pill-selection${pillCount}`,
    };
    pillsData.push(pillData);
  }
  const [pills, setPills] = useState(pillsData);

  const handleOnRemove = (pillKey, metaData) => {
    const pillsArray = pills;
    pillsArray.splice(metaData.index, 1);
    setPills([...pillsArray]);
  };

  return (
    <div className={cx('toolbar-container')}>
      <div className={cx('example-pills-container')}>
        {(pills.length <= 0) ? <button type="button" onClick={() => setPills(pillsData)}>Reset</button>
          : <span className={cx('example-label')}> Applied Filters :</span>}
        <FilterPills
          ariaLabel="Example of Collapsible Removable Filter Pills"
          isCollapsible
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
        <button className={cx('clear-filter-button')} type="button" onClick={() => setPills([])}>Clear All Filters</button>
      </div>
      <div>
        <Placeholder title="Sample Content" />
      </div>
    </div>
  );
};

export default AppliedFiltersExample;
