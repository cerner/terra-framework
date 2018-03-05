import React from 'react';
import TestExample from 'terra-disclosure-manager/examples/test-content/TestExample';
import SlidePanelManager from '../../lib/SlidePanelManager';

const SlidePanelManagerDefault = () => (
  <div role="main" style={{ height: '100%' }}>
    <SlidePanelManager>
      <TestExample identifier="root-component" disclosureType="panel" />
    </SlidePanelManager>
  </div>
);

export default SlidePanelManagerDefault;
