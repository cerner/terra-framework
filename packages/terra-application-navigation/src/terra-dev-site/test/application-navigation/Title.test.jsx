/* eslint-disable */
import React from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import ApplicationNavigation from '../../../ApplicationNavigation';
import FixedHeight from '../common/FixedHeight';
import Logo from '../common/Logo';

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
  element: <Logo />,
};

const titleConfigHideTitle = {
  title: 'Test Title',
  hideTitleWithinDrawerMenu: true,
};

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
const TitleTest = () => (
  <ApplicationBase locale="en">
    <FixedHeight><ApplicationNavigation titleConfig={titleConfig} /></FixedHeight>
    <FixedHeight><ApplicationNavigation titleConfig={titleConfigHeadLine} /></FixedHeight>
    <FixedHeight><ApplicationNavigation titleConfig={titleConfigSubline} /></FixedHeight>
    <FixedHeight><ApplicationNavigation titleConfig={titleConfigElement} /></FixedHeight>
    <FixedHeight><ApplicationNavigation titleConfig={titleConfigHideTitle} /></FixedHeight>
  </ApplicationBase>
);

export default TitleTest;
