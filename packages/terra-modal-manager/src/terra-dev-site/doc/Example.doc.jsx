/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import Markdown from 'terra-markdown';

import ModalManagerExample from './example/ModalManagerExample';
import { version } from '../../../package.json';
import Example from '../../../docs/example.md';

const ModalExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={Example} />
    <ModalManagerExample />
  </div>
);

export default ModalExamples;
