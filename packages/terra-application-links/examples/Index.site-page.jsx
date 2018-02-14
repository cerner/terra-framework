/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import { MemoryRouter } from 'react-router-dom';
import IndexTemplate from 'terra-site/src/IndexPageTemplate';
import Base from 'terra-base';
import ReadMe from '../docs/README.md';
import { version } from '../package.json';
import ApplicationLinkConfig from './index-examples/ApplicationLinkConfig';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import ListSrc from '!raw-loader!../src/list/ApplicationList.jsx';
import TabsSrc from '!raw-loader!../src/tabs/ApplicationTabs.jsx';
import ListExampleSrc from '!raw-loader!./index-examples/ApplicationListExample.jsx';
import TabExampleSrc from '!raw-loader!./index-examples/ApplicationTabsExample.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import ApplicationListExample from './index-examples/ApplicationListExample';
import ApplicationTabsExample from './index-examples/ApplicationTabsExample';

import messages from '../translations/en-US.json';

const LinkExamples = () => (
  <Base locale="en-US" customMessages={messages}>
    <MemoryRouter
      initialEntries={ApplicationLinkConfig.map(link => link.path)}
      initialIndex={0}
    >
      <div>
        <div id="version">Version: {version}</div>
        <Markdown id="readme" src={ReadMe} />
        <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>

        <IndexTemplate
          title="List Example"
          example={<ApplicationListExample />}
          exampleSrc={ListExampleSrc}
        />

        <IndexTemplate
          title="Tabs Example"
          example={<div style={{ height: '280px' }}><ApplicationTabsExample /></div>}
          exampleSrc={TabExampleSrc}
        />

        <PropsTable id="props-list" src={ListSrc} componentName="Application List" />
        <PropsTable id="props-tabs" src={TabsSrc} componentName="Application Tabs" />
      </div>
    </MemoryRouter>
  </Base>
);

export default LinkExamples;
