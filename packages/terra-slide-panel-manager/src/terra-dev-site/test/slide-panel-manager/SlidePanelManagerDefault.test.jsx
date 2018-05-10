import React from 'react';
import TestExample from 'terra-disclosure-manager/lib/terra-dev-site/test/common/TestExample';
import SlidePanelManager from '../../../SlidePanelManager';

const SlidePanelManagerDefault = () => (
  <div role="main" style={{ height: '100%' }}>
    <SlidePanelManager>
      <TestExample identifier="root-component" disclosureType="panel" />
    </SlidePanelManager>
  </div>
);

export default SlidePanelManagerDefault;
