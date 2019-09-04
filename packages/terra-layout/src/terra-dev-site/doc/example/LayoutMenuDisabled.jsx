import React from 'react';
import Layout from 'terra-layout/lib/Layout';
import ContentExample from 'terra-layout/lib/terra-dev-site/doc/common/ContentExample';
import ToolbarExample from 'terra-layout/lib/terra-dev-site/doc/common/ToolbarExample';
import classNames from 'classnames/bind';
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
