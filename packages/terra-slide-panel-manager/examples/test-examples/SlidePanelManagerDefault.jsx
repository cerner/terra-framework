import React from 'react';

import SlidePanelManager from '../../lib/SlidePanelManager';
import DemoContainer from './test-content/DemoContainer';

const SlidePanelManagerDefault = () => (
  <div role="main" style={{ height: '900px' }}>
    <SlidePanelManager>
      <DemoContainer identifier="root-component" />
    </SlidePanelManager>
  </div>
);

export default SlidePanelManagerDefault;
