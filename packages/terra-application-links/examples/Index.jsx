/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import { MemoryRouter } from 'react-router-dom';
import ReadMe from '../docs/README.md';
import { version } from '../package.json';
import ApplicationLinkConfig from './index-examples/ApplicationLinkConfig';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import ListSrc from '!raw-loader!../src/list/ApplicationList.jsx';
import TabsSrc from '!raw-loader!../src/tabs/ApplicationTabs.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import ApplicationListExample from './index-examples/ApplicationListExample';
import ApplicationTabsExample from './index-examples/ApplicationTabsExample';

const NavigationExamples = () => (
  <MemoryRouter
    initialEntries={ApplicationLinkConfig.map(link => link.path)}
    initialIndex={0}
  >
    <div>
      <div id="version">Version: {version}</div>
      <Markdown id="readme" src={ReadMe} />
      <PropsTable id="props-list" src={ListSrc} componentName="Application List" />
      <PropsTable id="props-tabs" src={TabsSrc} componentName="Application Tabs" />
      <h2 id="application-list-example">List Example</h2>
      <ApplicationListExample />
      <h2 id="application-tabs-example">Tabs Example</h2>
      <ApplicationTabsExample />
    </div>
  </MemoryRouter>
);

export default NavigationExamples;
