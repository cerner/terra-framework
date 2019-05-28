import React from 'react';
import classNames from 'classnames/bind';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import ApplicationMenuLayout from 'terra-application-menu-layout/lib/ApplicationMenuLayout';
import PlaceHolder from 'terra-application-menu-layout/lib/terra-dev-site/doc/common/Placeholder';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import styles from './MenuWireframe.scss';

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
