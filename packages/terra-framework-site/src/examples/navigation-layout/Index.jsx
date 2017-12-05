/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-navigation-layout/docs/README.md';
import { version } from 'terra-navigation-layout/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import NavigationLayoutSrc from '!raw-loader!terra-navigation-layout/src/NavigationLayout.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import NavigationLayoutStandard from './NavigationLayoutStandard';

const NavigationLayoutExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-navigation" src={NavigationLayoutSrc} />
    <h2 id="navigation-layout-standard">Example Navigation Layout</h2>
    <NavigationLayoutStandard />
  </div>
);

export default NavigationLayoutExamples;
