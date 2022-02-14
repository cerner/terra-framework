import React, { useState } from 'react';
import classNames from 'classnames/bind';
import FilterPills from 'terra-pills';

import styles from './FilterPillsTestCommon.module.scss';

const cx = classNames.bind(styles);

const SingleSelectableRemovableFilterPill = () => {
  const pillsData = [
    {
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar magna non erat eleifend auctor. Ut rhoncus nibh sed ante mollis, ac iaculis libero lacinia.',
      labelCategory: 'Long Label',
      id: 'terra-filter-pills-selectable-removable-pill-asthma',
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
        ariaLabel="Example of single selectable and removable Filter Pill with long label"
        onRemove={handleOnRemove}
        className={cx(['show-border', 'width-10'])}
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
        && <button type="button" onClick={() => setPills(pillsData)}>Show Pill</button>}
    </>
  );
};

export default SingleSelectableRemovableFilterPill;
