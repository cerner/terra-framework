import React from 'react';
import SlidePanel from '../../lib/SlidePanel';
import SlidePanelMainContent from '../test-examples/SlidePanelMainContent';
import SlidePanelPanelContent from '../test-examples/SlidePanelPanelContent';

const SlidePanelOverlay = () => (
  <SlidePanel
    mainContent={<SlidePanelMainContent />}
    panelContent={<SlidePanelPanelContent />}
    panelBehavior="overlay"
    panelPosition="end"
    panelSize="small"
    isOpen
  />
);

export default SlidePanelOverlay;
