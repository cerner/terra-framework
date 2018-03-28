import React from 'react';
import SlidePanel from '../../lib/SlidePanel';
import SlidePanelMainContent from '../test-examples/SlidePanelMainContent';
import SlidePanelPanelContent from '../test-examples/SlidePanelPanelContent';

const SlidePanelNoFill = () => (
  <div style={{ height: '200px', overflow: 'auto' }}>
    <SlidePanel
      mainContent={<SlidePanelMainContent />}
      panelContent={<SlidePanelPanelContent />}
      panelBehavior="squish"
      panelPosition="end"
      panelSize="small"
      isOpen
    />
  </div>
);

export default SlidePanelNoFill;
