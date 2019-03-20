import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { ApplicationTabs } from 'terra-application-links/lib/ApplicationLinks';
import ApplicationLinkConfig from 'terra-application-links/lib/terra-dev-site/doc/common/ApplicationLinksWithIconsConfig';
import demoStyles from './demoStyles.scss';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const ApplicationTabsExample = () => (
  <div style={demoStyles['demo-header'] + demoStyles['demo-header-with-icons']}>
    <ApplicationTabs alignment="center" links={ApplicationLinkConfig} />
  </div>
);

export default ApplicationTabsExample;
