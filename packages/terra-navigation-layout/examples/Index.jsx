/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import NavigationLayoutSrc from '!raw-loader!../src/NavigationLayout.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import NavigationLayoutStandard from './index-examples/NavigationLayoutStandard';

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
