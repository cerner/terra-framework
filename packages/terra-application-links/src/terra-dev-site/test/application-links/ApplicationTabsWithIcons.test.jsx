import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import classNames from 'classnames/bind';
import ApplicationTabs from '../../../tabs/ApplicationTabs';
import testLinksWithIconsConfig from '../common/testLinksWithIconsConfig';
import styles from './demoStyles.scss';

const cx = classNames.bind(styles);

export default () => (
  <MemoryRouter
    initialEntries={testLinksWithIconsConfig.map(link => link.path)}
    initialIndex={0}
  >
    <div className={cx(['demo-header', 'demo-header-with-icons'])}>
      <ApplicationTabs id="test-tabs" links={testLinksWithIconsConfig} />
    </div>
  </MemoryRouter>
);
