/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';

import ReadMe from '../docs/README.md';
import { name } from '../package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import NotificationDialogSrc from '!raw-loader!../src/NotificationDialog';

// Example Files
import CompleteNotificationDialog from './index-examples/CompleteNotificationDialog';
import CompleteNotificationDialogSrc from '!raw-loader!./index-examples/CompleteNotificationDialog.jsx';
import CompleteNotificationDialogWithLongMessage from './index-examples/CompleteNotificationDialogWithLongMessage';
import CompleteNotificationDialogWithLongMessageSrc from '!raw-loader!./index-examples/CompleteNotificationDialogWithLongMessage.jsx';
import NoVariantNotificationDialog from './index-examples/NoVariantNotificationDialog';
import NoVariantNotificationDialogSrc from '!raw-loader!./index-examples/NoVariantNotificationDialog.jsx';
import NotificationDialogWithLongText from './index-examples/NotificationDialogWithLongText';
import NotificationDialogWithLongTextSrc from '!raw-loader!./index-examples/NotificationDialogWithLongText.jsx';
import NotificationDialogOnModalManager from './index-examples/NotificationDialogOnModalManager';
import NotificationDialogOnModalManagerSrc from '!raw-loader!./index-examples/NotificationDialogOnModalManager.jsx';

const NotificationDialogExamples = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Complete Notification Dialog',
        example: <CompleteNotificationDialog />,
        source: CompleteNotificationDialogSrc,
      },
      {
        title: 'Complete Notification Dialog With Long Message',
        example: <CompleteNotificationDialogWithLongMessage />,
        source: CompleteNotificationDialogWithLongMessageSrc,
      },
      {
        title: 'No Variant Notification Dialog',
        example: <NoVariantNotificationDialog />,
        source: NoVariantNotificationDialogSrc,
      },
      {
        title: 'Notification Dialog With Long Text',
        example: <NotificationDialogWithLongText />,
        source: NotificationDialogWithLongTextSrc,
      },
      {
        title: 'Notification Dialog On Modal Manager',
        example: <NotificationDialogOnModalManager />,
        source: NotificationDialogOnModalManagerSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Notification Dialog',
        componentSrc: NotificationDialogSrc,
      },
    ]}
  />
);

export default NotificationDialogExamples;
