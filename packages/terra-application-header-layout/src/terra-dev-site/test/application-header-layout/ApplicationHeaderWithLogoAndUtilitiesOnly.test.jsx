import React from 'react';
import ApplicationHeaderLayout from '../../../ApplicationHeaderLayout';

const ApplicationHeaderWithLogoAndUtilitiesOnly = () => (
  <ApplicationHeaderLayout
    id="test-header"
    logo={<div id="test-logo">Logo&nbsp;</div>}
    utilities={<div id="test-utilities">Utilities&nbsp;</div>}
  />
);

export default ApplicationHeaderWithLogoAndUtilitiesOnly;
