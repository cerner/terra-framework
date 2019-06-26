import React from 'react';
import classNames from 'classnames/bind';
import ApplicationMenuLayout from '../../../ApplicationMenuLayout';
import styles from './ApplicationMenuDefault.test.module.scss';

const cx = classNames.bind(styles);

const ApplicationMenuDefault = () => (
  <ApplicationMenuLayout
    id="test-menu"
    extensions={<div id="test-extensions">Extensions</div>}
    content={<div className={cx('test-content')} id="test-content">Content</div>}
    header={<div id="test-header">Header</div>}
    footer={<div id="test-footer">Footer</div>}
  />
);

export default ApplicationMenuDefault;
