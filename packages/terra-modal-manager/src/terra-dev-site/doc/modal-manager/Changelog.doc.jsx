/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import Markdown from 'terra-markdown';

import ChangeLog from '../../../../CHANGELOG.md';
import { version } from '../../../../package.json';

const ModalExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="change" src={ChangeLog} />
  </div>
);

export default ModalExamples;
