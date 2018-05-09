/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from '../../../docs/README.md';
import { version } from '../../../package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import InfiniteListSrc from '!raw-loader!../../../src/InfiniteList.jsx';
import InfiniteListExampleSrc from '!raw-loader!./index-examples/InfiniteListExample.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */


// Example Files
import InfiniteListExample from './index-examples/InfiniteListExample';

const InfiniteListExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <IndexTemplate
      title="Example Infinite List"
      example={<InfiniteListExample />}
      exampleSrc={InfiniteListExampleSrc}
    />

    <PropsTable id="props" src={InfiniteListSrc} />
  </div>
);

export default InfiniteListExamples;
