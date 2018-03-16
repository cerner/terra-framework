/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ContentContainer from 'terra-content-container';
import { version } from '../package.json';
import ExampleDoc from '../docs/example.md';

// Example Files

import ExampleApplication from './index-examples/ExampleApplication';

const Example = () => (
  <div style={{ height: '100%' }}>
    <ContentContainer
      fill
      header={(
        <div>
          <div id="version">Version: {version}</div>
          <Markdown id="readme" src={ExampleDoc} />
        </div>
      )}
    >
      <ExampleApplication />
    </ContentContainer>
  </div>
);

export default Example;
