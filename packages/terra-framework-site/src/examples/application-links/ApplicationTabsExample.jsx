import React from 'react';
import { ApplicationTabs } from 'terra-application-links';
import ApplicationLinkConfig from './ApplicationLinkConfig';

const ApplicationTabsExample = () => (
  <div style={{ backgroundColor: '#2481ca', width: '100%' }}>
    <ApplicationTabs links={ApplicationLinkConfig} />
  </div>
);

export default ApplicationTabsExample;
