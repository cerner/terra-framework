import React from 'react';
import SlidePanel, { SlidePanelPositions } from 'terra-slide-panel';
import SlidePanelMainContent from './common/SlidePanelMainContent';
import SlidePanelPanelContent from './common/SlidePanelPanelContent';

const SlidePanelFullscreen = () => (
  <SlidePanel
    mainContent={<SlidePanelMainContent />}
    panelContent={<SlidePanelPanelContent />}
    panelBehavior="overlay"
    panelPosition={SlidePanelPositions.END}
    panelSize="small"
    isOpen
    isFullscreen
  />
);

export default SlidePanelFullscreen;
