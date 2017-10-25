/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-navigation/docs/README.md';
import { version } from 'terra-navigation/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import NavigationSrc from '!raw-loader!terra-navigation/src/Navigation.jsx';
import ToolbarSrc from '!raw-loader!terra-navigation/src/toolbar/Toolbar.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import ToolbarStandard from './ToolbarStandard';

const NavigationExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-navigation" src={NavigationSrc} />
    <PropsTable id="props-toolbar" src={ToolbarSrc} />
    <h2 id="toolbar-standard">Toolbar Standard</h2>
    <ToolbarStandard />
  </div>
);

export default NavigationExamples;
