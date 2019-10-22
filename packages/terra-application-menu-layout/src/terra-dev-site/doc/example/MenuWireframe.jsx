import React from 'react';
import classNames from 'classnames/bind';
import ApplicationMenuLayout from 'terra-application-menu-layout';
import PlaceHolder from 'terra-application-menu-layout/lib/terra-dev-site/doc/common/Placeholder';
import styles from './MenuWireframe.module.scss';

const cx = classNames.bind(styles);

const Menu = () => (
  <div className={cx('content-wrapper')}>
    <ApplicationMenuLayout
      header={<PlaceHolder text="Header" type="header" />}
      footer={<PlaceHolder text="Footer" type="footer" />}
      extensions={<PlaceHolder text="Extensions" type="extensions" />}
      content={<PlaceHolder text="Content" />}
    />
  </div>
);

export default Menu;
