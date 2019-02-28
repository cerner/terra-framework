import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import PopupCommonExample from 'terra-popup/lib/terra-dev-site/doc/common/PopupCommonExample';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import './PopupAttachments.scss';

const PopupAttachements = () => (
  <React.Fragment>
    <div className="row">
      <PopupCommonExample contentAttachment="bottom left" title="Bottom-Left" />
      <PopupCommonExample contentAttachment="bottom center" title="Bottom-Center" />
      <PopupCommonExample contentAttachment="bottom right" title="Bottom-Right" />
    </div>
    <div className="row">
      <PopupCommonExample contentAttachment="middle left" title="Middle-Left" />
      <PopupCommonExample contentAttachment="middle center" title="Middle-Center" />
      <PopupCommonExample contentAttachment="middle right" title="Middle-Right" />
    </div>
    <div className="row">
      <PopupCommonExample contentAttachment="top left" title="Top-Left" />
      <PopupCommonExample contentAttachment="top center" title="Top-Center" />
      <PopupCommonExample contentAttachment="top right" title="Top-Right" />
    </div>
  </React.Fragment>
);

export default PopupAttachements;
