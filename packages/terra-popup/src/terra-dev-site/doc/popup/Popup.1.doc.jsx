import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

// Component Source
import PopupSrc from '!raw-loader!../../../../src/Popup.jsx';

// Example Files
import PopupCommonExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/common/PopupCommonExample.jsx';
import PopupStandard from '../example/PopupStandard';
import PopupBounded from '../example/PopupBounded';
import PopupBoundedSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PopupBounded.jsx';
import PopupNoHeader from '../example/PopupNoHeader';
import PopupNoHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PopupNoHeader.jsx';
import PopupWithArrow from '../example/PopupWithArrow';
import PopupDimensions from '../example/PopupDimensions';
import PopupInsideModal from '../example/PopupInsideModal';
import PopupInsideModalSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PopupInsideModal.jsx';
import PopupAttachmentBehavior from '../example/PopupAttachmentBehavior';
import PopupAttachments from '../example/PopupAttachments';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Popup Standard Implementation',
        example: <PopupStandard />,
        source: PopupCommonExampleSrc,
      },
      {
        title: 'Popup Display With Arrow',
        example: <PopupWithArrow />,
      },
      {
        title: 'Popup Attachment Behavior',
        example: <PopupAttachmentBehavior />,
      },
      {
        title: 'Popup Attachments',
        example: <PopupAttachments />,
      },
      {
        title: 'Popup Size Variants',
        example: <PopupDimensions />,
      },
      {
        title: 'Popup Bounded',
        example: <PopupBounded />,
        source: PopupBoundedSrc,
      },
      {
        title: 'Popup Bounded With No Header',
        example: <PopupNoHeader />,
        source: PopupNoHeaderSrc,
      },
      {
        title: 'Popup Inside Modal',
        example: <PopupInsideModal />,
        source: PopupInsideModalSrc,
      },
    ]}
    propsTables={[
      {
        componentSrc: PopupSrc,
      },
    ]}
  />
);

export default DocPage;
