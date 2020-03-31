/* eslint-disable */
import React from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import ApplicationNavigation from '../../../ApplicationNavigation';
import FixedHeight from '../common/FixedHeight';

const userConfig = {
  name: 'Test Name',
  initials: 'TN',
};

const userConfigDetail = {
  name: 'Test Name',
  initials: 'TN',
  detail: 'Test Detail',
};

const userConfigSrc = {
  name: 'Test Name',
  imageSrc: 'test-src',
};

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
const UserTest = () => (
  <ApplicationBase locale="en">
    <FixedHeight><ApplicationNavigation userConfig={userConfig} /></FixedHeight>
    <FixedHeight><ApplicationNavigation userConfig={userConfigDetail} /></FixedHeight>
    <FixedHeight><ApplicationNavigation userConfig={userConfigSrc} /></FixedHeight>
  </ApplicationBase>
);

export default UserTest;
