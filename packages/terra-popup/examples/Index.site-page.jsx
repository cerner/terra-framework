/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../package.json';
import ReadMe from 'terra-popup/docs/README.md';

// Component Source
import PopupSrc from '!raw-loader!terra-popup/src/Popup.jsx';

// Example Files
import PopupStandard from './site-examples/PopupStandard';
import PopupStandardSrc from '!raw-loader!./site-examples/PopupStandard';
import PopupBounded from './site-examples/PopupBounded';
import PopupBoundedSrc from '!raw-loader!./site-examples/PopupBounded';
import PopupNoHeader from './site-examples/PopupNoHeader';
import PopupNoHeaderSrc from '!raw-loader!./site-examples/PopupNoHeader';
import PopupWithArrow from './site-examples/PopupWithArrow';
import PopupWithArrowSrc from '!raw-loader!./site-examples/PopupWithArrow';
import PopupClassName from './site-examples/PopupClassName';
import PopupClassNameSrc from '!raw-loader!./site-examples/PopupClassName';
import PopupDimensions from './site-examples/PopupDimensions';
import PopupDimensionsSrc from '!raw-loader!./site-examples/PopupDimensions';
import PopupInsideModal from './site-examples/PopupInsideModal';
import PopupInsideModalSrc from '!raw-loader!./site-examples/PopupInsideModal';
import PopupAttachmentBehavior from './site-examples/PopupAttachmentBehavior';
import PopupAttachmentBehaviorSrc from '!raw-loader!./site-examples/PopupAttachmentBehavior';
import PopupAttachments from './site-examples/PopupAttachments';
import PopupAttachmentsSrc from '!raw-loader!./site-examples/PopupAttachments';

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
