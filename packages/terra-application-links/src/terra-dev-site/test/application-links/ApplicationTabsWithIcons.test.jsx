import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ApplicationTabs from '../../../tabs/ApplicationTabs';
import testLinksWithIconsConfig from '../common/testLinksWithIconsConfig';

const demoheaderstyles = {
  width: '100%',
  backgroundColor: '#1c5f92',
  height: '72px',
  position: 'relative',
};

export default () => (
  <MemoryRouter
    initialEntries={testLinksWithIconsConfig.map(link => link.path)}
    initialIndex={0}
  >
    <div style={demoheaderstyles}>
      <ApplicationTabs id="test-tabs" links={testLinksWithIconsConfig} />
    </div>
  </MemoryRouter>
);
