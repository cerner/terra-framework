import React from 'react';
import SlidePanel, { SlidePanelPositions } from 'terra-slide-panel';
import SlidePanelMainContent from './common/SlidePanelMainContent';
import SlidePanelPanelContent from './common/SlidePanelPanelContent';

const SlidePanelMultiplePanels = () => (
  <div>
    <SlidePanel
      mainContent={<SlidePanelMainContent />}
      panelContent={<SlidePanelPanelContent />}
      panelBehavior="overlay"
      panelPosition={SlidePanelPositions.START}
      panelSize="small"
      isOpen
    />
    <SlidePanel
      mainContent={<SlidePanelMainContent />}
      panelContent={<SlidePanelPanelContent />}
      panelBehavior="overlay"
      panelPosition={SlidePanelPositions.END}
      panelSize="small"
      isOpen
    />
  </div>
);

export default SlidePanelMultiplePanels;
