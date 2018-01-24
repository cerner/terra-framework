/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-application-utility/docs/README.md';
import { version } from 'terra-application-utility/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ApplicationUtilitySrc from '!raw-loader!terra-application-utility/src/ApplicationUtility';

// Example Files

const ApplicationUtilityExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ApplicationUtilitySrc} />
  </div>
);

export default ApplicationUtilityExamples;
