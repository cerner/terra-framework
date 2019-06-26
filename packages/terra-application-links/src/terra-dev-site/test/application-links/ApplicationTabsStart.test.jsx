import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ApplicationTabs from '../../../tabs/ApplicationTabs';
import testShortConfig from '../common/testShortConfig';
import demoStyles from './demoStyles.module.scss';

export default () => (
  <MemoryRouter
    initialEntries={testShortConfig.map(link => link.path)}
    initialIndex={0}
  >
    <div className={demoStyles['demo-header']}>
      <ApplicationTabs id="test-tabs" alignment="start" links={testShortConfig} />
    </div>
  </MemoryRouter>
);
