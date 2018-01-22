/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-application-links/docs/README.md';
import { version } from 'terra-application-links/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import ListSrc from '!raw-loader!terra-application-links/src/list/ApplicationList.jsx';
import TabsSrc from '!raw-loader!terra-application-links/src/tabs/ApplicationTabs.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import ApplicationTabsExample from './ApplicationTabsExample';

const NavigationExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-list" src={ListSrc} componentName="Application List" />
    <PropsTable id="props-tabs" src={TabsSrc} componentName="Application Tabs" />
    <h2 id="application-tabs-example">Menu Wireframe</h2>
    <ApplicationTabsExample />
  </div>
);

export default NavigationExamples;
