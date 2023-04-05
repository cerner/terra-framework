import React from 'react';
import ApplicationNavigation from '../../../../../application-navigation/private/ApplicationNavigation';
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
  <>
    <FixedHeight><ApplicationNavigation id="test-default" titleConfig={titleConfig} /></FixedHeight>
    <FixedHeight><ApplicationNavigation id="test-headline" titleConfig={titleConfigHeadLine} /></FixedHeight>
    <FixedHeight><ApplicationNavigation id="test-subline" titleConfig={titleConfigSubline} /></FixedHeight>
    <FixedHeight><ApplicationNavigation id="test-element" titleConfig={titleConfigElement} /></FixedHeight>
    <FixedHeight><ApplicationNavigation id="test-title" titleConfig={titleConfigHideTitle} /></FixedHeight>
  </>
);

export default TitleTest;
