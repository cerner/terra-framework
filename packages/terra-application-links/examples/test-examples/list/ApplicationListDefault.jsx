import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ApplicationList from '../../../lib/list/ApplicationList';
import testLinkConfig from '../testLinkConfig';

export default () => (
  <MemoryRouter
    initialEntries={testLinkConfig.map(link => link.path)}
    initialIndex={0}
  >
    <ApplicationList id="test-list" links={testLinkConfig} />
  </MemoryRouter>
);
