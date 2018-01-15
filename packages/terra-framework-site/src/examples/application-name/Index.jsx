/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-framework-application-name/docs/README.md';
import { version } from 'terra-framework-application-name/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ApplicationNameSrc from '!raw-loader!terra-framework-application-name/src/ApplicationName';

// Example Files

const ApplicationNameExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ApplicationNameSrc} />
  </div>
);

export default ApplicationNameExamples;
