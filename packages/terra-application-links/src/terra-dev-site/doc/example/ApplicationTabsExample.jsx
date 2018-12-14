import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { ApplicationTabs } from 'terra-application-links/lib/ApplicationLinks';
import ApplicationLinkConfig from 'terra-application-links/lib/terra-dev-site/doc/common/ApplicationLinkConfig';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const demoheaderstyles = {
  width: '100%',
  backgroundColor: '#8ca1b1',
  height: '49px',
  position: 'relative',
};

const ApplicationTabsExample = () => (
  <div style={demoheaderstyles}>
    <ApplicationTabs alignment="center" links={ApplicationLinkConfig} />
  </div>
);

export default ApplicationTabsExample;
