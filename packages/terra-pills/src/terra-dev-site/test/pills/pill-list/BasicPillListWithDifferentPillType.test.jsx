import React from 'react';
import PillList from '../../../../PillList';
import Pill from '../../../../Pill';

const BasicPillListWithDifferentPillType = () => {
  const handleOnRemove = () => {
    // Callback just to enable remove button
  };

  return (
    <PillList
      ariaLabel="Pill Container"
    >
      <Pill
        labelText="Basic 1"
      />
      <Pill
        labelText="Removable"
        onRemove={handleOnRemove}
      />
      <Pill
        labelText="Popup"
        popupConfig={{ contentHeight: '240', contentWidth: '240', content: (<p>Popup Content</p>) }}
      />
      <Pill
        labelText="Removable and Popup"
        popupConfig={{ contentHeight: '240', contentWidth: '240', content: (<p>Popup Content</p>) }}
        onRemove={handleOnRemove}
      />
      <Pill
        labelText="Basic 2"
      />
    </PillList>
  );
};

export default BasicPillListWithDifferentPillType;
