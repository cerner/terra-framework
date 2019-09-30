import React from 'react';
import PopupCommonExample from 'terra-popup/lib/terra-dev-site/doc/common/PopupCommonExample';
import './PopupAttachments.module.scss';

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
