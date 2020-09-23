import React from 'react';
import PillList from '../../../PillList';
import Pill from '../../../Pill';

const PillWithPopup = () => (
  <PillList
    ariaLabel="Terra Modal"
  >
    <Pill
      labelText="Demo"
      popupConfig={{ contentHeight: '240', contentWidth: '240', content: (<p>Popup Content</p>) }}
    />
  </PillList>
);

export default PillWithPopup;
