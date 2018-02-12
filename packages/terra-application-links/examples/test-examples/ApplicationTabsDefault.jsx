import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Base from 'terra-base';
import ApplicationTabs from '../../lib/tabs/ApplicationTabs';
import testLinkConfig from './config/testLinkConfig';
import messages from '../../translations/en-US.json';

export default () => (
  <Base locale="en-US" customMessages={messages}>
    <MemoryRouter
      initialEntries={testLinkConfig.map(link => link.path)}
      initialIndex={0}
    >
      <div style={{ border: '1px solid lightGray', width: '100%', backgroundColor: 'gray', height: '39px', position: 'relative' }}>
        <ApplicationTabs id="test-tabs" links={testLinkConfig} />
      </div>
    </MemoryRouter>
  </Base>
);
