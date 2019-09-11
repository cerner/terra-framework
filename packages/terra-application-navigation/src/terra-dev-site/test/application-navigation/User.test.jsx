/* eslint-disable */
import React from 'react';
import ApplicationNavigation from '../../../ApplicationNavigation';
import FixedHeight from '../common/FixedHeight';

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

const UserTest = () => (
  <React.Fragment>
    <FixedHeight><ApplicationNavigation userConfig={userConfig} /></FixedHeight>
    <FixedHeight><ApplicationNavigation userConfig={userConfigDetail} /></FixedHeight>
    <FixedHeight><ApplicationNavigation userConfig={userConfigInitials} /></FixedHeight>
    <FixedHeight><ApplicationNavigation userConfig={userConfigSrc} /></FixedHeight>
  </React.Fragment>
);

export default UserTest;
