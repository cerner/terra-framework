import React from 'react';
import DocTemplate from 'terra-doc-template';

import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import NotificationDialogSrc from '!raw-loader!../../../../src/NotificationDialog';

// Example Files
import CompleteNotificationDialog from '../example/CompleteNotificationDialog';
import CompleteNotificationDialogSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CompleteNotificationDialog.jsx';
import CompleteNotificationDialogWithLongMessage from '../example/CompleteNotificationDialogWithLongMessage';
import CompleteNotificationDialogWithLongMessageSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CompleteNotificationDialogWithLongMessage.jsx';
import ContentNotificationDialog from '../example/ContentNotificationDialog';
import ContentNotificationDialogSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ContentNotificationDialog.jsx';
import NoVariantNotificationDialog from '../example/NoVariantNotificationDialog';
import NoVariantNotificationDialogSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/NoVariantNotificationDialog.jsx';
import NotificationDialogWithLongText from '../example/NotificationDialogWithLongText';
import NotificationDialogWithLongTextSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/NotificationDialogWithLongText.jsx';
import NotificationDialogOnModalManager from '../example/NotificationDialogOnModalManager';
import NotificationDialogOnModalManagerSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/NotificationDialogOnModalManager.jsx';
import ReversedActionNotificationDialog from '../example/ReversedActionNotificationDialog';
import ReversedActionNotificationDialogSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ReversedActionNotificationDialog.jsx';
import EmphasizedRejectNotificationDialog from '../example/EmphasizedRejectNotificationDialog';
import EmphasizedRejectNotificationDialogSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/EmphasizedRejectNotificationDialog.jsx';

const DocPage = () => (
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
      {
        title: 'Notification Dialog with Content',
        example: <ContentNotificationDialog />,
        source: ContentNotificationDialogSrc,
      },
      {
        title: 'Notification Dialog with Actions Reversed',
        example: <ReversedActionNotificationDialog />,
        source: ReversedActionNotificationDialogSrc,
      },
      {
        title: 'Notification Dialog with Reject Action emphasized',
        example: <EmphasizedRejectNotificationDialog />,
        source: EmphasizedRejectNotificationDialogSrc,
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

export default DocPage;
