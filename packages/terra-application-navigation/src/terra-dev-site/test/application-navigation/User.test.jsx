/* eslint-disable */
import React from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import ApplicationNavigation from '../../../ApplicationNavigation';

const userConfig = {
  name: 'Test Name',
};

const userConfigDetail = {
  name: 'Test Name',
  detail: 'Test Detail',
};

const userConfigInitials = {
  name: 'Test Name',
  initials: 'TN',
};

const userConfigSrc = {
  name: 'Test Name',
  imageSrc: 'test-src',
};

// TODO: remove terra-application after it is incorporated into dev-site
const TitleTest = () => (
  <ApplicationBase locale="en">
    <div style={{ height: '100px' }}><ApplicationNavigation userConfig={userConfig} /></div>
    <div style={{ height: '100px' }}><ApplicationNavigation userConfig={userConfigDetail} /></div>
    <div style={{ height: '100px' }}><ApplicationNavigation userConfig={userConfigInitials} /></div>
    <div style={{ height: '100px' }}><ApplicationNavigation userConfig={userConfigSrc} /></div>
  </ApplicationBase>
);

export default TitleTest;
