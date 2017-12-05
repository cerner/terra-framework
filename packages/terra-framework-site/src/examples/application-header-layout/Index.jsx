/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-application-header-layout/docs/README.md';
import { version } from 'terra-application-header-layout/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import HeaderSrc from '!raw-loader!terra-application-header-layout/src/ApplicationHeaderLayout.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import HeaderWireframe from './HeaderWireframe';

const NavigationExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-header" src={HeaderSrc} componentName="Application Header Layout" />
    <h2 id="header-wireframe">Header Wireframe</h2>
    <HeaderWireframe />
  </div>
);

export default NavigationExamples;
