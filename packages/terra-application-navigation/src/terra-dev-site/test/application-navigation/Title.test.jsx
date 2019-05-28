
/* eslint-disable */
import React from 'react';
import Application from 'terra-application';
import ApplicationNavigation from '../../../ApplicationNavigation';

const titleConfig = {
  title: 'Test Title',
};

const titleConfigHeadLine = {
  title: 'Test Title',
  headline: 'Test HeadLine',
};

const titleConfigSubline = {
  title: 'Test Title',
  subline: 'Test Subline',
};

const titleConfigElement = {
  title: 'Test Title',
  element: <div style={{ height: '30px', width: '30px', backgroundColor: 'yellow' }} />,
};

const titleConfigHideTitle = {
  title: 'Test Title',
  hideTitleWithinDrawerMenu: true,
};

// TODO: remove terra-application after it is incorporated into dev-site
const TitleTest = () => (
  <Application locale="en">
    <div style={{ height: '70px' }}><ApplicationNavigation titleConfig={titleConfig} /></div>
    <div style={{ height: '70px' }}><ApplicationNavigation titleConfig={titleConfigHeadLine} /></div>
    <div style={{ height: '70px' }}><ApplicationNavigation titleConfig={titleConfigSubline} /></div>
    <div style={{ height: '70px' }}><ApplicationNavigation titleConfig={titleConfigElement} /></div>
    <div style={{ height: '70px' }}><ApplicationNavigation titleConfig={titleConfigHideTitle} /></div>
  </Application>
);

export default TitleTest;
