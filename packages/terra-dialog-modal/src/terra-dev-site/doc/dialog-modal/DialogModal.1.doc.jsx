import React from 'react';
import DocTemplate from 'terra-doc-template';

import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import DialogModalSrc from '!raw-loader!../../../../src/DialogModal';

// Example Files
import DefaultDialogModal from '../example/DefaultDialogModal';
import DefaultDialogModalSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultDialogModal.jsx';
import DialogModalWithLongText from '../example/DialogModalWithLongText';
import DialogModalWithLongTextSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DialogModalWithLongText.jsx';
import DialogModalOnModalManager from '../example/DialogModalOnModalManager';
import DialogModalOnModalManagerSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DialogModalOnModalManager.jsx';
import DialogModalWithCustomHeaderAndCustomFooter from '../example/DialogModalWithCustomHeaderAndCustomFooter';
import DialogModalWithCustomHeaderAndCustomFooterSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DialogModalWithCustomHeaderAndCustomFooter.jsx';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
      {
        title: 'Dialog Modal On Modal Manager',
        example: <DialogModalOnModalManager />,
        source: DialogModalOnModalManagerSrc,
      },
      {
        title: 'Dialog Modal With Custom Header and Custom Footer',
        example: <DialogModalWithCustomHeaderAndCustomFooter />,
        source: DialogModalWithCustomHeaderAndCustomFooterSrc,
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
