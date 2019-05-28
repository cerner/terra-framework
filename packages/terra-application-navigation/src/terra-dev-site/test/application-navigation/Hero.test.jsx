
/* eslint-disable */
import React from 'react';
import Application from 'terra-application';
import ApplicationNavigation from '../../../ApplicationNavigation';
import Placeholder from 'terra-doc-template/lib/Placeholder';

const hero = <Placeholder title="Test Hero" />;

// TODO: remove terra-application after it is incorporated into dev-site
const TitleTest = () => (
  <Application locale="en">
    <ApplicationNavigation hero={hero} />
  </Application>
);

export default TitleTest;
