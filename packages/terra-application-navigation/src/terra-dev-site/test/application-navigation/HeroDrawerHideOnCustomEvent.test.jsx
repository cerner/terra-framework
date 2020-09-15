/* eslint-disable */
import React from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import ApplicationNavigation from '../../../ApplicationNavigation';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import Button from 'terra-button';

const hero = <Placeholder title="Test Hero" variant="light" />;

const func = () => {
  const event = new Event('terra-application-navigation.dismiss-menu');
  window.dispatchEvent(event);
}

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
const HeroDrawerTest = () => (
  <ApplicationBase locale="en">
    <ApplicationNavigation hero={hero} />
    <Button onClick={func} text="Dispatch Custom Event"/>
  </ApplicationBase>
);

export default HeroDrawerTest;
