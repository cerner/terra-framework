import React from 'react';
import classNames from 'classnames/bind';
import ApplicationHeaderLayout from '../../../ApplicationHeaderLayout';
import styles from './ApplicationHeaderDefault.test.module.scss';

const cx = classNames.bind(styles);

const ApplicationHeaderDefault = () => (
  <ApplicationHeaderLayout
    id="test-header"
    extensions={<div id="test-extensions">Extensions&nbsp;</div>}
    navigation={<div className={cx('test-navigation')} id="test-navigation">Navigation&nbsp;</div>}
    logo={<div id="test-logo">Logo&nbsp;</div>}
    toggle={<div id="test-toggle">Toggle&nbsp;</div>}
    utilities={<div id="test-utilities">Utilities&nbsp;</div>}
  />
);

export default ApplicationHeaderDefault;
