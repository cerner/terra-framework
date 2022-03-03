import React from 'react';
import Layout from 'terra-layout';
import classNames from 'classnames/bind';
import ContentExample from '../common/ContentExample';
import ToolbarExample from '../common/ToolbarExample';
import styles from './LayoutDocExampleCommon.module.scss';

const cx = classNames.bind(styles);

const layout = () => (
  <Layout
    header={<ToolbarExample />}
    className={cx('layout-example')}
  >
    <ContentExample />
  </Layout>
);

export default layout;
