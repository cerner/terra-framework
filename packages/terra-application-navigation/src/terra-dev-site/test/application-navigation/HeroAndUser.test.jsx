/* eslint-disable */
import React from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import ApplicationNavigation from '../../../ApplicationNavigation';
import Placeholder from 'terra-doc-template/lib/Placeholder';

const hero = <Placeholder title="Test Hero" variant="light" />;

const userConfig = {
  name: 'Test Name',
  detail: 'Test Detail',
};

// TODO: remove terra-application after it is incorporated into dev-site
const HeroAndUserTest = () => (
  <ApplicationBase locale="en">
    <ApplicationNavigation
      hero={hero}
      userConfig={userConfig}
    />
  </ApplicationBase>
);

export default HeroAndUserTest;
