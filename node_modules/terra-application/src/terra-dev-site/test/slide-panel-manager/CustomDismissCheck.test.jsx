import React from 'react';
import DisclosureComponent from './DisclosureComponent';
import SlidePanelManager from '../../../slide-panel-manager';

const CustomDismissCheck = () => (
  <SlidePanelManager>
    <DisclosureComponent identifier="root-component" disclosureType="panel" renderHeaderAdapter useCustomDismissCheck />
  </SlidePanelManager>
);

export default CustomDismissCheck;
