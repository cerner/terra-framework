/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-application-tabs/docs/README.md';
import { version } from 'terra-application-tabs/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import MenuSrc from '!raw-loader!terra-application-tabs/src/ApplicationTabs.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import ApplicationTabsExample from './ApplicationTabsExample';

const NavigationExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-menu" src={MenuSrc} componentName="Application Tabs" />
    <h2 id="application-tabs-example">Menu Wireframe</h2>
    <ApplicationTabsExample />
  </div>
);

export default NavigationExamples;
