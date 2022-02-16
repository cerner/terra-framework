import React from 'react';
import classNames from 'classnames/bind';
import PillTemplate from './common/PillTemplate';
import pillsData from './common/PillData';
import styles from './common/FilterPillsTestCommon.module.scss';

const cx = classNames.bind(styles);

const RemovableFilterPills = () => (
  <PillTemplate data={pillsData.slice(0, 3)} ariaLabel="Example of removable Pills" className={cx(['show-border'])} />
);

export default RemovableFilterPills;
