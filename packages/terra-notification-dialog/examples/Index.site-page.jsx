/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

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

const NotificationDialogExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="NotificationDialog - Complete"
      example={<CompleteNotificationDialog />}
      exampleSrc={CompleteNotificationDialogSrc}
    />
    <IndexTemplate
      title="NotificationDialog - Complete with Long Message"
      example={<CompleteNotificationDialogWithLongMessage />}
      exampleSrc={CompleteNotificationDialogWithLongMessageSrc}
    />
    <IndexTemplate
      title="NotificationDialog - No Variant"
      example={<NoVariantNotificationDialog />}
      exampleSrc={NoVariantNotificationDialogSrc}
    />

    <PropsTable id="props" src={NotificationDialogSrc} />
  </div>
);

export default NotificationDialogExamples;
