import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Base from 'terra-base';
import ApplicationTabs from '../../../tabs/ApplicationTabs';
import testShortConfig from '../common/testShortConfig';
import messages from '../../../../translations/en-US.json';

export default () => (
  <Base locale="en-US" customMessages={messages}>
    <MemoryRouter
      initialEntries={testShortConfig.map(link => link.path)}
      initialIndex={0}
    >
      <div style={{
        border: '1px solid lightGray', width: '100%', backgroundColor: 'green', height: '39px', position: 'relative',
      }}
      >
        <ApplicationTabs id="test-tabs" alignment="end" links={testShortConfig} />
      </div>
    </MemoryRouter>
  </Base>
);
