import React from 'react';
import Pill from '../../../../Pill';

const PillWithPopup = () => (
  <Pill
    labelText="Demo"
    popupConfig={{ contentHeight: '240', contentWidth: '240', content: (<p>Popup Content</p>) }}
  />
);

export default PillWithPopup;
