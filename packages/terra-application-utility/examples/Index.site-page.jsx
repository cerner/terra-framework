/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-site/src/IndexPageTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
import ApplicationHeaderUtilitySrc from '!raw-loader!../src/ApplicationHeaderUtility.jsx';

// Example File
import MockApplicationHeader from './index-examples/MockApplicationHeader';
import MockApplicationHeaderSrc from '!raw-loader!./index-examples/MockApplicationHeader.jsx';

const ApplicationUtilityExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="Application Header Utility"
      example={<MockApplicationHeader />}
      exampleSrc={MockApplicationHeaderSrc}
    />
    <PropsTable id="props-table" src={ApplicationHeaderUtilitySrc} />
  </div>
);

export default ApplicationUtilityExamples;
