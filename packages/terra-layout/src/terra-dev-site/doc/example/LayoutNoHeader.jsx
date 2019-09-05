import React from 'react';

import Layout from 'terra-layout/lib/Layout';
import ContentExample from 'terra-layout/lib/terra-dev-site/doc/common/ContentExample';
import MenuExample from 'terra-layout/lib/terra-dev-site/doc/common/MenuExample';
import classNames from 'classnames/bind';
import styles from './LayoutDocExampleCommon.module.scss';

const cx = classNames.bind(styles);

const layout = () => (
  <Layout
    menu={<MenuExample />}
    menuText="Menu"
    className={cx('layout-example')}
  >
    <ContentExample />
  </Layout>
);

export default layout;
