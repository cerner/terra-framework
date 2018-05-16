/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';

import ReadMe from '../docs/README.md';
import { name } from '../package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import DialogModalSrc from '!raw-loader!../src/DialogModal';

// Example Files
import DefaultDialogModal from './index-examples/DefaultDialogModal';
import DefaultDialogModalSrc from '!raw-loader!./index-examples/DefaultDialogModal.jsx';
import DialogModalWithLongText from './index-examples/DialogModalWithLongText';
import DialogModalWithLongTextSrc from '!raw-loader!./index-examples/DialogModalWithLongText.jsx';

const DialogModalExamples = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Dialog Modal',
        example: <DefaultDialogModal />,
        source: DefaultDialogModalSrc,
      },
      {
        title: 'Dialog Modal With Long Text',
        example: <DialogModalWithLongText />,
        source: DialogModalWithLongTextSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Dialog Modal',
        componentSrc: DialogModalSrc,
      },
    ]}
  />
);

export default DialogModalExamples;
