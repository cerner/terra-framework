import React from 'react';
import SlidePanel, { SlidePanelPositions } from 'terra-slide-panel';
import SlidePanelMainContent from './common/SlidePanelMainContent';
import SlidePanelPanelContent from './common/SlidePanelPanelContent';

const SlidePanelSquish = () => (
  <SlidePanel
    mainContent={<SlidePanelMainContent />}
    panelContent={<SlidePanelPanelContent />}
    panelBehavior="squish"
    panelPosition={SlidePanelPositions.END}
    panelSize="small"
    isOpen
  />
);

export default SlidePanelSquish;
