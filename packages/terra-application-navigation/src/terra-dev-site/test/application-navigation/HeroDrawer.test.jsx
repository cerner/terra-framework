/* eslint-disable */
import React from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import ApplicationNavigation from '../../../ApplicationNavigation';
import Placeholder from 'terra-doc-template/lib/Placeholder';

const hero = <Placeholder title="Test Hero" variant="light" />;

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
const HeroDrawerTest = () => (
  <ApplicationBase locale="en">
    <ApplicationNavigation hero={hero} />
  </ApplicationBase>
);

export default HeroDrawerTest;
