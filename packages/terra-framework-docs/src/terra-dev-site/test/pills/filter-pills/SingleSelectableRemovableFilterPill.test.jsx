import React from 'react';
import classNames from 'classnames/bind';
import PillTemplate from './common/PillTemplate';
import styles from './common/FilterPillsTestCommon.module.scss';

const cx = classNames.bind(styles);

const SingleSelectableRemovableFilterPill = () => {
  const pillsData = [
    {
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar magna non erat eleifend auctor. Ut rhoncus nibh sed ante mollis, ac iaculis libero lacinia.',
      labelCategory: 'Long Label',
      id: 'terra-filter-pills-selectable-removable-pill-asthma',
    },
  ];

  return (
    <PillTemplate
      data={pillsData}
      ariaLabel="Example of single selectable and removable Filter Pill with long label"
      className={cx(['show-border', 'width-10'])}
    />
  );
};

export default SingleSelectableRemovableFilterPill;
