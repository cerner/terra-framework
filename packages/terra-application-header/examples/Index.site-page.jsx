/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-site/src/IndexPageTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
import HeaderSrc from '!raw-loader!../src/ApplicationHeader.jsx';

// Example File
import HeaderExample from './index-examples/ApplicationHeaderExample';
import HeaderExampleSrc from '!raw-loader!./index-examples/ApplicationHeaderExample.jsx';

const HeaderExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="Header"
      example={<HeaderExample />}
      exampleSrc={HeaderExampleSrc}
    />

    <PropsTable id="props-table" src={HeaderSrc} />
  </div>
);

export default HeaderExamples;
