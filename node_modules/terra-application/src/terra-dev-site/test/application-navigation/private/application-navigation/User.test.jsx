import React from 'react';
import ApplicationNavigation from '../../../../../application-navigation/private/ApplicationNavigation';
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
    <FixedHeight><ApplicationNavigation id="test-default" userConfig={userConfig} /></FixedHeight>
    <FixedHeight><ApplicationNavigation id="test-detail" userConfig={userConfigDetail} /></FixedHeight>
    <FixedHeight><ApplicationNavigation id="test-src" userConfig={userConfigSrc} /></FixedHeight>
    <FixedHeight><ApplicationNavigation id="test-no-initials" userConfig={userConfigNoInitials} /></FixedHeight>
    <FixedHeight><ApplicationNavigation id="test-fallback" userConfig={userConfigImageFallbackNoInitials} /></FixedHeight>
  </>
);

export default UserTest;
