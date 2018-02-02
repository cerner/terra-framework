import React from 'react';
import { ApplicationTabs } from '../../lib/ApplicationLinks';
import ApplicationLinkConfig from './ApplicationLinkConfig';

const ApplicationTabsExample = () => (
  <div style={{ border: '1px solid lightGray', backgroundColor: '#2481ca', width: '100%', height: '50px', position: 'relative' }}>
    <ApplicationTabs links={ApplicationLinkConfig} />
  </div>
);

export default ApplicationTabsExample;
