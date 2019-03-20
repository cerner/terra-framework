import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ApplicationTabs from '../../../tabs/ApplicationTabs';
import testLinksWithIconsConfig from '../common/testLinksWithIconsConfig';
import demoStyles from './demoStyles.scss';

export default () => (
  <MemoryRouter
    initialEntries={testLinksWithIconsConfig.map(link => link.path)}
    initialIndex={0}
  >
    <div style={demoStyles['demo-header'] + demoStyles['demo-header-with-icons']}>
      <ApplicationTabs id="test-tabs" links={testLinksWithIconsConfig} />
    </div>
  </MemoryRouter>
);
