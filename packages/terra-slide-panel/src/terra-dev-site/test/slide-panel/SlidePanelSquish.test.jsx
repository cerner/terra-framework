import React from 'react';
import SlidePanel from '../../../SlidePanel';
import SlidePanelMainContent from '../common/SlidePanelMainContent';
import SlidePanelPanelContent from '../common/SlidePanelPanelContent';

const SlidePanelSquish = () => (
  <SlidePanel
    mainContent={<SlidePanelMainContent />}
    panelContent={<SlidePanelPanelContent />}
    panelBehavior="squish"
    panelPosition={SlidePanel.position.END}
    panelSize="small"
    isOpen
  />
);

export default SlidePanelSquish;
