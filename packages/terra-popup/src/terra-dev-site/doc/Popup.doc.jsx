/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../package.json';
import ReadMe from 'terra-popup/docs/README.md';

// Component Source
import PopupSrc from '!raw-loader!terra-popup/src/Popup.jsx';

// Example Files
import PopupStandard from './example/PopupStandard';
import PopupStandardSrc from '!raw-loader!./example/PopupStandard';
import PopupBounded from './example/PopupBounded';
import PopupBoundedSrc from '!raw-loader!./example/PopupBounded';
import PopupNoHeader from './example/PopupNoHeader';
import PopupNoHeaderSrc from '!raw-loader!./example/PopupNoHeader';
import PopupWithArrow from './example/PopupWithArrow';
import PopupWithArrowSrc from '!raw-loader!./example/PopupWithArrow';
import PopupClassName from './example/PopupClassName';
import PopupClassNameSrc from '!raw-loader!./example/PopupClassName';
import PopupDimensions from './example/PopupDimensions';
import PopupDimensionsSrc from '!raw-loader!./example/PopupDimensions';
import PopupInsideModal from './example/PopupInsideModal';
import PopupInsideModalSrc from '!raw-loader!./example/PopupInsideModal';
import PopupAttachmentBehavior from './example/PopupAttachmentBehavior';
import PopupAttachmentBehaviorSrc from '!raw-loader!./example/PopupAttachmentBehavior';
import PopupAttachments from './example/PopupAttachments';
import PopupAttachmentsSrc from '!raw-loader!./example/PopupAttachments';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Popup Default Props',
        example: <PopupStandard />,
        source: PopupStandardSrc,
      },
      {
        title: 'Popup Display With Arrow',
        example: <PopupWithArrow />,
        source: PopupWithArrowSrc,
      },
      {
        title: 'Popup Attachment Behavior',
        example: <PopupAttachmentBehavior />,
        source: PopupAttachmentBehaviorSrc,
      },
      {
        title: 'Popup Attachments',
        example: <PopupAttachments />,
        source: PopupAttachmentsSrc,
      },
      {
        title: 'Popup Size Variants',
        example: <PopupDimensions />,
        source: PopupDimensionsSrc,
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
        title: 'Popup Adding Class',
        example: <PopupClassName />,
        source: PopupClassNameSrc,
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
