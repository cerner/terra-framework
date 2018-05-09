/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import Markdown from 'terra-markdown';

import ReadMe from '../../docs/README.md';
import { version } from '../../package.json';

const AppDelegateExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
  </div>
);

export default AppDelegateExamples;
