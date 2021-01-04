import React, { useState } from 'react';
import Pill from '../../../../Pill';

const RemovablePillWithPopup = () => {
  const [isRemoved, setIsRemoved] = useState(true);

  const handleOnRemove = () => {
    setIsRemoved(false);
  };

  return (
    <div>
      {isRemoved && (
        <Pill
          labelText="Demo"
          popupConfig={{ contentHeight: '240', contentWidth: '240', content: (<p>Popup Content</p>) }}
          onRemove={handleOnRemove}
        />
      )}
    </div>
  );
};

export default RemovablePillWithPopup;
