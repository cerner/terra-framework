import React from 'react';
import ApplicationHeaderLayout from '../../../ApplicationHeaderLayout';

const ApplicationHeaderDefault = () => (
  <ApplicationHeaderLayout
    id="test-header"
    extensions={<div id="test-extensions">Extensions&nbsp;</div>}
    navigation={<div style={{ width: '100%', textAlign: 'center' }} id="test-navigation">Navigation&nbsp;</div>}
    logo={<div id="test-logo">Logo&nbsp;</div>}
    toggle={<div id="test-toggle">Toggle&nbsp;</div>}
    utilities={<div id="test-utilities">Utilities&nbsp;</div>}
  />
);

export default ApplicationHeaderDefault;
