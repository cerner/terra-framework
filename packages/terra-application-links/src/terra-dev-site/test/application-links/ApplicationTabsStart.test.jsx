import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Base from 'terra-base';
import ApplicationTabs from '../../../tabs/ApplicationTabs';
import testShortConfig from '../common/testShortConfig';
import messages from '../../../../translations/en-US.json';

const demoheaderstyles = {
  width: '100%',
  backgroundColor: '#8ca1b1',
  height: '49px',
  position: 'relative',
};

export default () => (
  <Base locale="en-US" customMessages={messages}>
    <MemoryRouter
      initialEntries={testShortConfig.map(link => link.path)}
      initialIndex={0}
    >
      <div style={demoheaderstyles}>
        <ApplicationTabs id="test-tabs" alignment="start" links={testShortConfig} />
      </div>
    </MemoryRouter>
  </Base>
);
