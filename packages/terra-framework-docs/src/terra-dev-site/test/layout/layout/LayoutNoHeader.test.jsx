import React from 'react';
import classNames from 'classnames/bind';
import Layout from 'terra-layout';
import TestMenu from '../common/TestMenu';
import TestContent from '../common/TestContent';
import styles from './TestLayoutCommon.module.scss';

const cx = classNames.bind(styles);

const LayoutNoHeader = () => (
  <Layout
    className={cx('layout-test')}
    key="layout-no-header"
    menu={<TestMenu />}
    menuText="Menu Text"
    id="test-root"
  >
    <TestContent />
  </Layout>
);

export default LayoutNoHeader;
