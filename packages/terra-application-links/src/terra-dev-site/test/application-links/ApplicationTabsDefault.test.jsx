import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Base from 'terra-base';
import ApplicationTabs from '../../../tabs/ApplicationTabs';
import testLinkConfig from '../common/testLinkConfig';
import messages from '../../../../translations/en-US.json';

const demoheaderstyles = {
  width: '100%',
  backgroundColor: '#1c5f92',
  height: '49px',
  position: 'relative',
};

export default () => (
  <Base locale="en-US" customMessages={messages}>
    <MemoryRouter
      initialEntries={testLinkConfig.map(link => link.path)}
      initialIndex={0}
    >
      <div style={demoheaderstyles}>
        <ApplicationTabs id="test-tabs" links={testLinkConfig} />
      </div>
    </MemoryRouter>
  </Base>
);
