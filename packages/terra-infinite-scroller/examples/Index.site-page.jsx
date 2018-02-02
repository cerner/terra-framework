/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import InfiniteScrollerSrc from '!raw-loader!../src/InfiniteScroller';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */


// Example Files
import InfiniteScrollerExample from './index-examples/InfiniteScrollerExample';

const InfiniteScrollerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-infinite-scroller" src={InfiniteScrollerSrc} componentName="Infinite Scroller" />
    <h2 id="infinite-scroller-example">Infinite Scroller Example</h2>
    <InfiniteScrollerExample />
  </div>
);

export default InfiniteScrollerExamples;
