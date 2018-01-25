import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ApplicationTabs from '../../../lib/tabs/ApplicationTabs';
import testLinkConfig from '../testLinkConfig';

export default () => (
  <MemoryRouter
    initialEntries={testLinkConfig.map(link => link.path)}
    initialIndex={0}
  >
    <div className="test-wrapper" style={{ border: '1px solid lightGray', width: '100%', backgroundColor: 'gray' }}>
      <ApplicationTabs links={testLinkConfig} />
    </div>
  </MemoryRouter>
);
