/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../package.json';
import ReadMe from 'terra-popup/docs/README.md';

// Component Source
import PopupSrc from '!raw-loader!terra-popup/src/Popup.jsx';

// Example Files
import PopupStandard from './site-examples/PopupStandard';
import PopupBounded from './site-examples/PopupBounded';
import PopupNoHeader from './site-examples/PopupNoHeader';
import PopupWithArrow from './site-examples/PopupWithArrow';
import PopupClassName from './site-examples/PopupClassName';
import PopupDimensions from './site-examples/PopupDimensions';
import PopupInsideModal from './site-examples/PopupInsideModal';
import PopupAttachmentBehavior from './site-examples/PopupAttachmentBehavior';
import PopupAttachments from './site-examples/PopupAttachments';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Popup Default Props',
        example: <PopupStandard />,
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
      },
      {
        title: 'Popup Bounded With No Header',
        example: <PopupNoHeader />,
      },
      {
        title: 'Popup Adding Class',
        example: <PopupClassName />,
      },
      {
        title: 'Popup Inside Modal',
        example: <PopupInsideModal />,
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
