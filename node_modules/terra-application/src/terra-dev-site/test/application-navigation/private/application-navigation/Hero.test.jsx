/* eslint-disable */
import React from 'react';
import ApplicationNavigation from '../../../../../application-navigation/private/ApplicationNavigation';
import { Placeholder } from '@cerner/terra-docs';

const hero = <Placeholder title="Test Hero" />;

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
const HeroTest = () => (
  <ApplicationNavigation hero={hero} />
);

export default HeroTest;
