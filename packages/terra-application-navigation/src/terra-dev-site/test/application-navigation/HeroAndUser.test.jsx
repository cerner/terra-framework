/* eslint-disable */
import React from 'react';
import ApplicationNavigation from '../../../ApplicationNavigation';
import { Placeholder } from '@cerner/terra-docs';

const hero = <Placeholder title="Test Hero" />;

const userConfig = {
  name: 'Test Name',
  initials: 'TN',
  detail: 'Test Detail',
};

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
const HeroAndUserTest = () => (
  <ApplicationNavigation
    hero={hero}
    userConfig={userConfig}
  />
);

export default HeroAndUserTest;
