import React from 'react';
import classNames from 'classnames/bind';
import Layout from 'terra-layout';
import TestHeader from '../common/TestHeader';
import TestContent from '../common/TestContent';
import styles from './TestLayoutCommon.module.scss';

const cx = classNames.bind(styles);

const LayoutNoMenu = () => (
  <Layout
    className={cx('layout-test')}
    key="layout-no-menu"
    header={<TestHeader />}
    id="test-root"
  >
    <TestContent />
  </Layout>
);

export default LayoutNoMenu;
