import React from 'react';
import Layout from 'terra-layout';
import classNames from 'classnames/bind';
import ContentExample from '../common/ContentExample';
import MenuExample from '../common/MenuExample';
import ToolbarExample from '../common/ToolbarExample';
import styles from './LayoutDocExampleCommon.module.scss';

const cx = classNames.bind(styles);

const layout = () => (
  <Layout
    header={<ToolbarExample />}
    menu={<MenuExample />}
    menuText="Menu"
    className={cx('layout-example')}
  >
    <ContentExample />
  </Layout>
);

export default layout;
