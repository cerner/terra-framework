import React from 'react';
import { ApplicationTabs } from '../../../ApplicationLinks';
import ApplicationLinkConfig from '../common/ApplicationLinkConfig';

const ApplicationTabsExample = () => (
  <div style={{ border: '1px solid lightGray', backgroundColor: '#2481ca', width: '100%', height: '50px', position: 'relative' }}>
    <ApplicationTabs alignment="end" links={ApplicationLinkConfig} />
  </div>
);

export default ApplicationTabsExample;
