import React from 'react';
import Pill from '../../../../Pill';

const BasicRemovablePill = () => {
  const handleOnRemove = () => {
    // eslint-disable-next-line no-alert
    alert('Remove button clicked');
  };

  return (
    <Pill
      labelText="Demo"
      onRemove={handleOnRemove}
    />
  );
};

export default BasicRemovablePill;
