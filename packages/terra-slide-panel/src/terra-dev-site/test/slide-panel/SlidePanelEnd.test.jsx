import React from 'react';
import SlidePanel, { SlidePanelPositions } from '../../../SlidePanel';
import SlidePanelMainContent from '../common/SlidePanelMainContent';
import SlidePanelPanelContent from '../common/SlidePanelPanelContent';

const SlidePanelEnd = () => (
  <SlidePanel
    mainContent={<SlidePanelMainContent />}
    panelContent={<SlidePanelPanelContent />}
    panelBehavior="overlay"
    panelPosition={SlidePanelPositions.END}
    panelSize="small"
    isOpen
  />
);

export default SlidePanelEnd;
