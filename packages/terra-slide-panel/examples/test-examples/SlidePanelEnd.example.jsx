import React from 'react';
import SlidePanel from '../../lib/SlidePanel';
import SlidePanelMainContent from './SlidePanelMainContent';
import SlidePanelPanelContent from './SlidePanelPanelContent';

const SlidePanelEnd = () => (
  <SlidePanel
    mainContent={<SlidePanelMainContent />}
    panelContent={<SlidePanelPanelContent />}
    panelBehavior="overlay"
    panelPosition="end"
    panelSize="small"
    isOpen
  />
);

export default SlidePanelEnd;
