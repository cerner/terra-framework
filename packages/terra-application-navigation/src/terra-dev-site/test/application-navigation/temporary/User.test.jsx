/* eslint-disable */
import React from 'react';
import Application from 'terra-application';
import ApplicationNavigation from '../../../../ApplicationNavigation';

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

const TitleTest = () => (
  <Application>
    <div style={{ height: '100px' }}><ApplicationNavigation userConfig={userConfig} /></div>
    <div style={{ height: '100px' }}><ApplicationNavigation userConfig={userConfigDetail} /></div>
    <div style={{ height: '100px' }}><ApplicationNavigation userConfig={userConfigInitials} /></div>
    <div style={{ height: '100px' }}><ApplicationNavigation userConfig={userConfigSrc} /></div>
  </Application>
);

export default TitleTest;
