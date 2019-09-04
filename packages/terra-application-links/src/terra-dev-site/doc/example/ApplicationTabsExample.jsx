import React from 'react';
import { ApplicationTabs } from 'terra-application-links/lib/ApplicationLinks';
import ApplicationLinkConfig from 'terra-application-links/lib/terra-dev-site/doc/common/ApplicationLinkConfig';
import demoStyles from './demoStyles.module.scss';

const ApplicationTabsExample = () => (
  <div className={demoStyles['demo-header']}>
    <ApplicationTabs alignment="center" links={ApplicationLinkConfig} />
  </div>
);

export default ApplicationTabsExample;
