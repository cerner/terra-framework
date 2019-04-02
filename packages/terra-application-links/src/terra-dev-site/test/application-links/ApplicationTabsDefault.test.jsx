import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ApplicationTabs from '../../../tabs/ApplicationTabs';
import testLinkConfig from '../common/testLinkConfig';
import demoStyles from './demoStyles.scss';

export default () => (
  <MemoryRouter
    initialEntries={testLinkConfig.map(link => link.path)}
    initialIndex={0}
  >
    <div className={demoStyles['demo-header']}>
      <ApplicationTabs id="test-tabs" links={testLinkConfig} />
    </div>
  </MemoryRouter>
);
