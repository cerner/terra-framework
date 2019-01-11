import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ApplicationTabs from '../../../tabs/ApplicationTabs';
import testShortConfig from '../common/testShortConfig';

export default () => (
  <MemoryRouter
    initialEntries={testShortConfig.map(link => link.path)}
    initialIndex={0}
  >
    <div style={{
      border: '1px solid lightGray', width: '100%', backgroundColor: 'green', height: '39px', position: 'relative',
    }}
    >
      <ApplicationTabs id="test-tabs" alignment="start" links={testShortConfig} />
    </div>
  </MemoryRouter>
);
