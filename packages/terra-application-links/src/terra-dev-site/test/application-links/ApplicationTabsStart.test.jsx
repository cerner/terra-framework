import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ApplicationTabs from '../../../tabs/ApplicationTabs';
import testShortConfig from '../common/testShortConfig';

const demoheaderstyles = {
  width: '100%',
  backgroundColor: '#8ca1b1',
  height: '49px',
  position: 'relative',
};

export default () => (
  <MemoryRouter
    initialEntries={testShortConfig.map(link => link.path)}
    initialIndex={0}
  >
    <div style={{
      border: '1px solid lightGray', width: '100%', backgroundColor: 'green', height: '39px', position: 'relative',
    }}
    >
<<<<<<< HEAD
      <div style={demoheaderstyles}>
        <ApplicationTabs id="test-tabs" alignment="start" links={testShortConfig} />
      </div>
    </MemoryRouter>
  </Base>
=======
      <ApplicationTabs id="test-tabs" alignment="start" links={testShortConfig} />
    </div>
  </MemoryRouter>
>>>>>>> master
);
