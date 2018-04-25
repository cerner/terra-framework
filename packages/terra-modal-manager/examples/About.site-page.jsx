/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
import ModalMangerSrc from '!raw-loader!../src/ModalManger.jsx';

const ModalMangerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ModalMangerSrc} />
  </div>
);

export default ModalMangerExamples;
