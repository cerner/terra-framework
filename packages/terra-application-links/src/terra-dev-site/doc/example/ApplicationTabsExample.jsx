import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { ApplicationTabs } from 'terra-application-links/lib/ApplicationLinks';
import ApplicationLinkConfig from 'terra-application-links/lib/terra-dev-site/doc/common/ApplicationLinkConfig';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const ApplicationTabsExample = () => (
  <div
    style={{
      border: '1px solid lightGray', backgroundColor: '#2481ca', width: '100%', height: '50px', position: 'relative',
    }}
  >
    <ApplicationTabs alignment="end" links={ApplicationLinkConfig} />
  </div>
);

export default ApplicationTabsExample;
