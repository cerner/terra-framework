/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-aggregator/docs/README.md';
import { version } from 'terra-aggregator/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import AggregatorSrc from '!raw-loader!terra-aggregator/src/Aggregator';

// Example Files

const AggregatorExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={AggregatorSrc} />
  </div>
);

export default AggregatorExamples;
