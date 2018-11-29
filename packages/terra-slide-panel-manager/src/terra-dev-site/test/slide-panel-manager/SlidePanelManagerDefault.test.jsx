import React from 'react';
import DisclosureComponent from './DisclosureComponent';
import SlidePanelManager from '../../../SlidePanelManager';

const SlidePanelManagerDefault = () => (
  <div role="main" style={{ height: '100%' }}>
    <SlidePanelManager>
      <DisclosureComponent identifier="root-component" disclosureType="panel" />
    </SlidePanelManager>
  </div>
);

export default SlidePanelManagerDefault;
