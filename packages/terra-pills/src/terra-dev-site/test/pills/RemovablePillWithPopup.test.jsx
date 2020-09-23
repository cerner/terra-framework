import React from 'react';
import PillList from '../../../PillList';
import Pill from '../../../Pill';

const BasicPill = () => {
  const handleOnRemove = () => {
    alert('Remove button clicked');
  };

  return (
    <PillList
      ariaLabel="Terra Modal"
    >
      <Pill
        labelText="Demo"
        popupConfig={{ contentHeight: '240', contentWidth: '240', content: (<p>Popup Content</p>) }}
        onRemove={handleOnRemove}
      />
    </PillList>
  );
};

export default BasicPill;
