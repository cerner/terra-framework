/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import DialogModalSrc from '!raw-loader!../src/DialogModal';

// Example Files
import DefaultDialogModal from './index-examples/DefaultDialogModal';
import DefaultDialogModalSrc from '!raw-loader!./index-examples/DefaultDialogModal.jsx';
import DialogModalWithLongText from './index-examples/DialogModalWithLongText';
import DialogModalWithLongTextSrc from '!raw-loader!./index-examples/DialogModalWithLongText.jsx';

const DialogModalExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="DialogModal - Default"
      example={<DefaultDialogModal />}
      exampleSrc={DefaultDialogModalSrc}
    />
    <IndexTemplate
      title="DialogModal with longer text and a width of 800"
      example={<DialogModalWithLongText />}
      exampleSrc={DialogModalWithLongTextSrc}
    />

    <PropsTable id="props" src={DialogModalSrc} />
  </div>
);

export default DialogModalExamples;
