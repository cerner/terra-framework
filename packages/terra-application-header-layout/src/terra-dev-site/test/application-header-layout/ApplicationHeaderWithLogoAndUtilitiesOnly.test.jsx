import React from 'react';
import classNames from 'classnames/bind';
import ApplicationHeaderLayout from '../../../ApplicationHeaderLayout';
import styles from './ApplicationHeaderDefault.test.module.scss';

const cx = classNames.bind(styles);

const ApplicationHeaderWithLogoAndUtilitiesOnly = () => (
  <ApplicationHeaderLayout
    id="test-header"
    className={cx('test-header-layout')}
    logo={<div id="test-logo">Logo&nbsp;</div>}
    utilities={<div id="test-utilities">Utilities&nbsp;</div>}
  />
);

export default ApplicationHeaderWithLogoAndUtilitiesOnly;
