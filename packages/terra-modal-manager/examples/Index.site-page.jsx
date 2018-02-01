/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
import ModalManagerSrc from '!raw-loader!../src/ModalManager.jsx';

// Examples
import ModalManagerExample from './index-examples/ModalManagerExample';

const ModalManagerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <ModalManagerExample behavior="squish" />
    <br />
    <PropsTable id="props-table" src={ModalManagerSrc} />
  </div>
);

export default ModalManagerExamples;
