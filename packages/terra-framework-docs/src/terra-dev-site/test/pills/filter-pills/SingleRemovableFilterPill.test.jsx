import React from 'react';
import classNames from 'classnames/bind';
import PillTemplate from './common/PillTemplate';
import pillsData from './common/PillData';
import styles from './common/FilterPillsTestCommon.module.scss';

const cx = classNames.bind(styles);

const SingleRemovableFilterPill = () => (
  <PillTemplate
    data={pillsData.slice(0, 1)}
    ariaLabel="Example of Single Removable Filter Pill"
    className={cx(['show-border'])}
  />
);

export default SingleRemovableFilterPill;
