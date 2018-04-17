/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
import ModalSrc from '!raw-loader!../src/Modal.jsx';
import ModalExampleSrc from '!raw-loader!./index-examples/ModalExample.jsx';

// Examples
import ModalExample from './index-examples/ModalExample';

const ModalExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <IndexTemplate
      title="Example Modal"
      example={<ModalExample />}
      exampleSrc={ModalExampleSrc}
    />
    <PropsTable id="props" src={ModalSrc} />
  </div>
);

export default ModalExamples;
