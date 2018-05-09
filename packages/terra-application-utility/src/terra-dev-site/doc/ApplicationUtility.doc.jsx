/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from '../../../docs/README.md';
import { version } from '../../../package.json';

// Component Source
import ApplicationHeaderUtilitySrc from '!raw-loader!../../../src/ApplicationHeaderUtility.jsx';

// Example File
import ApplicationHeaderUtilityExample from './example/ApplicationHeaderUtilityExample';
import ApplicationMenuUtilityExample from './example/ApplicationMenuUtilityExample';
import MenuUtilityMenuExample from './example/MenuUtilityMenuExample';
import ApplicationHeaderUtilityExampleSrc from '!raw-loader!../../../src/terra-dev-site/doc//example/ApplicationHeaderUtilityExample.jsx';
import MenuUtilityMenuExampleSrc from '!raw-loader!../../../src/terra-dev-site/doc//example/MenuUtilityMenuExample.jsx';
import ApplicationMenuUtilityExampleSrc from '!raw-loader!../../../src/terra-dev-site/doc//example/ApplicationMenuUtilityExample.jsx';

const ApplicationUtilityExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="Header: Utility"
      example={<ApplicationHeaderUtilityExample />}
      exampleSrc={ApplicationHeaderUtilityExampleSrc}
    />
    <br />
    <IndexTemplate
      title="Menu: Utility"
      example={<ApplicationMenuUtilityExample />}
      exampleSrc={ApplicationMenuUtilityExampleSrc}
    />
    <br />
    <IndexTemplate
      title="Utility Menu"
      example={<MenuUtilityMenuExample />}
      exampleSrc={MenuUtilityMenuExampleSrc}
    />
    <br />
    <PropsTable id="props-table" src={ApplicationHeaderUtilitySrc} />
  </div>
);

export default ApplicationUtilityExamples;
