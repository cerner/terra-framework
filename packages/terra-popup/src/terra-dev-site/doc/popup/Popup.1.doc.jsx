import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import PopupSrc from '!raw-loader!../../../../src/Popup.jsx';

// Example Files
import PopupStandard from '../example/PopupStandard';
import PopupStandardSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PopupStandard.jsx';
import PopupBounded from '../example/PopupBounded';
import PopupBoundedSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PopupBounded.jsx';
import PopupNoHeader from '../example/PopupNoHeader';
import PopupNoHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PopupNoHeader.jsx';
import PopupWithArrow from '../example/PopupWithArrow';
import PopupWithArrowSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PopupWithArrow.jsx';
import PopupClassName from '../example/PopupClassName';
import PopupClassNameSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PopupClassName.jsx';
import PopupDimensions from '../example/PopupDimensions';
import PopupDimensionsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PopupDimensions.jsx';
import PopupInsideModal from '../example/PopupInsideModal';
import PopupInsideModalSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PopupInsideModal.jsx';
import PopupAttachmentBehavior from '../example/PopupAttachmentBehavior';
import PopupAttachmentBehaviorSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PopupAttachmentBehavior.jsx';
import PopupAttachments from '../example/PopupAttachments';
import PopupAttachmentsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PopupAttachments.jsx';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
