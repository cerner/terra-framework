import React from 'react';
import { ApplicationTabs } from 'terra-application-links';
import ApplicationLinkConfig from 'terra-application-links/lib/terra-dev-site/doc/common/ApplicationLinksWithIconsConfig';
import classNames from 'classnames/bind';
import styles from './demoStyles.module.scss';

const cx = classNames.bind(styles);

const ApplicationTabsExample = () => (
  <div className={cx(['demo-header', 'demo-header-with-icons'])}>
    <ApplicationTabs alignment="center" links={ApplicationLinkConfig} />
  </div>
);

export default ApplicationTabsExample;
