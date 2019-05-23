
/* eslint-disable */
import React from 'react';
import Application from 'terra-application';
import ApplicationNavigation from '../../../ApplicationNavigation';
import Placeholder from 'terra-doc-template/lib/Placeholder';

const hero = <Placeholder title="Test Hero" />;

const TitleTest = () => (
  <Application locale="en-US">
    <ApplicationNavigation hero={hero} />
  </Application>
);

export default TitleTest;
