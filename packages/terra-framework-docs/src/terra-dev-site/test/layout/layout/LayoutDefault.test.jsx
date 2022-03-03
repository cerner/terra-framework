import React from 'react';
import classNames from 'classnames/bind';
import Layout from 'terra-layout';
import TestHeader from '../common/TestHeader';
import TestMenu from '../common/TestMenu';
import TestContent from '../common/TestContent';
import styles from './TestLayoutCommon.module.scss';

const cx = classNames.bind(styles);

const LayoutDefault = () => (
  <Layout
    className={cx('layout-test')}
    key="layout-default"
    header={<TestHeader />}
    menu={<TestMenu />}
    menuText="Menu Text"
    id="test-root"
  >
    <TestContent />
  </Layout>
);

export default LayoutDefault;
