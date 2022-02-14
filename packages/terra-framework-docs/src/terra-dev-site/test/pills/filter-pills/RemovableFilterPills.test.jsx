import React, { useState } from 'react';
import classNames from 'classnames/bind';
import FilterPills from 'terra-pills';

import styles from './FilterPillsTestCommon.module.scss';

const cx = classNames.bind(styles);

const RemovableFilterPills = () => {
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
    <>
      <FilterPills
        ariaLabel="Example of removable Filter Pills"
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
    </>
  );
};

export default RemovableFilterPills;
