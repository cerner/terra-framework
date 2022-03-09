import React from 'react';
import classNames from 'classnames/bind';
import styles from './common/FilterPillsTestCommon.module.scss';
import PillTemplate from './common/PillTemplate';
import pillsData from './common/PillData';

const cx = classNames.bind(styles);

const SelectableRemovableFilterPills = () => (
  <PillTemplate
    data={pillsData.slice(0, 3)}
    ariaLabel="Example of selectable and removable Filter Pills"
    className={cx(['show-border', 'width-10'])}
  />
);

export default SelectableRemovableFilterPills;
