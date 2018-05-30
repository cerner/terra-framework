import React from 'react';
import SlidePanel from '../../../SlidePanel';
import SlidePanelMainContent from '../common/SlidePanelMainContent';
import SlidePanelPanelContent from '../common/SlidePanelPanelContent';

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
