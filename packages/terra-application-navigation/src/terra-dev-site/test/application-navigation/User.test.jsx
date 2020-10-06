import React from 'react';
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
  initials: 'TN',
  imageSrc: 'test-src',
};

const userConfigImageFallbackNoInitials = {
  name: 'Test Name',
  imageSrc: 'test-src',
};

const userConfigNoInitials = {
  name: 'Test Name',
};

const UserTest = () => (
  <>
    <FixedHeight><ApplicationNavigation userConfig={userConfig} /></FixedHeight>
    <FixedHeight><ApplicationNavigation userConfig={userConfigDetail} /></FixedHeight>
    <FixedHeight><ApplicationNavigation userConfig={userConfigSrc} /></FixedHeight>
    <FixedHeight><ApplicationNavigation userConfig={userConfigNoInitials} /></FixedHeight>
    <FixedHeight><ApplicationNavigation userConfig={userConfigImageFallbackNoInitials} /></FixedHeight>
  </>
);

export default UserTest;
