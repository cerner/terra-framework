/* eslint-disable */
import React from 'react';
import ApplicationNavigation from '../../../ApplicationNavigation';
import Placeholder from 'terra-doc-template/lib/Placeholder';

const hero = <Placeholder title="Test Hero" variant="light" />;

const userConfig = {
  name: 'Test Name',
  detail: 'Test Detail',
};

const HeroAndUserTest = () => (
  <ApplicationNavigation
    hero={hero}
    userConfig={userConfig}
  />
);

export default HeroAndUserTest;
