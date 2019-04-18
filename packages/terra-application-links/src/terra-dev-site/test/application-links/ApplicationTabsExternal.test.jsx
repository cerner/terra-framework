import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ApplicationTabs from '../../../tabs/ApplicationTabs';
import testExternalConfig from '../common/testExternalConfig';
import demoStyles from './demoStyles.scss';

export default () => (
  <MemoryRouter
    initialEntries={testExternalConfig.map(link => link.path)}
    initialIndex={0}
  >
    <div className={demoStyles['demo-header']}>
      <ApplicationTabs id="test-tabs" alignment="end" links={testExternalConfig} />
    </div>
  </MemoryRouter>
);
