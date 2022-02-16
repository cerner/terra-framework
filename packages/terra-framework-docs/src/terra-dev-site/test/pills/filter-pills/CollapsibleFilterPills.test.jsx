import React from 'react';
import classNames from 'classnames/bind';
import styles from './common/FilterPillsTestCommon.module.scss';
import PillTemplate from './common/PillTemplate';
import pillsData from './common/PillData';

const cx = classNames.bind(styles);

const CollapsibleFilterPills = () => (
  <>
    <PillTemplate
      data={pillsData}
      ariaLabel="Example of collapsed filter pills"
      isCollapsible
      className={cx(['container', 'show-border', 'width-50'])}
    />
  </>
);

export default CollapsibleFilterPills;
