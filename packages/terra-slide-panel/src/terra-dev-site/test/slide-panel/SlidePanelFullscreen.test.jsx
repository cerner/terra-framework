import React from 'react';
import SlidePanel from '../../../SlidePanel';
import SlidePanelMainContent from '../common/SlidePanelMainContent';
import SlidePanelPanelContent from '../common/SlidePanelPanelContent';

const SlidePanelFullscreen = () => (
  <SlidePanel
    mainContent={<SlidePanelMainContent />}
    panelContent={<SlidePanelPanelContent />}
    panelBehavior="overlay"
    panelPosition={SlidePanel.position.END}
    panelSize="small"
    isOpen
    isFullscreen
  />
);

export default SlidePanelFullscreen;
