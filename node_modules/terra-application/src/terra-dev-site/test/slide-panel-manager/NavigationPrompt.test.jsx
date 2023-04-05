import React from 'react';
import DisclosureComponent from './DisclosureComponent';
import SlidePanelManager from '../../../slide-panel-manager';

const NavigationPrompt = () => (
  <SlidePanelManager>
    <DisclosureComponent identifier="root-component" disclosureType="panel" renderHeaderAdapter />
  </SlidePanelManager>
);

export default NavigationPrompt;
