/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-framework-external-component/docs/README.md';
import { version } from 'terra-framework-external-component/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ExternalComponentSrc from '!raw-loader!terra-framework-external-component/src/ExternalComponent';

// Example Files

const ExternalComponentExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ExternalComponentSrc} />
  </div>
);

export default ExternalComponentExamples;
