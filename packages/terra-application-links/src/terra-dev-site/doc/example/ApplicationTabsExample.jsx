import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { ApplicationTabs } from 'terra-application-links/lib/ApplicationLinks';
import ApplicationLinkConfig from 'terra-application-links/lib/terra-dev-site/doc/common/ApplicationLinkConfig';
import demoStyles from './demoStyles.scss';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const ApplicationTabsExample = () => (
  <div className={demoStyles['demo-header']}>
    <ApplicationTabs alignment="center" links={ApplicationLinkConfig} />
  </div>
);

export default ApplicationTabsExample;
