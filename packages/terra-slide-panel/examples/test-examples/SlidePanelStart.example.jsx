import React from 'react';
import SlidePanel from '../../lib/SlidePanel';
import SlidePanelMainContent from './SlidePanelMainContent';
import SlidePanelPanelContent from './SlidePanelPanelContent';

const SlidePanelStart = () => (
  <SlidePanel
    mainContent={<SlidePanelMainContent />}
    panelContent={<SlidePanelPanelContent />}
    panelBehavior="overlay"
    panelPosition="start"
    panelSize="small"
    isOpen
  />
);

export default SlidePanelStart;
