import React, { useState } from 'react';
import Pills from 'terra-pills/lib/index';

const BasicRemovablePill = () => {
  const pills = [
    {
      label: 'asthma',
    },
    {
      label: 'bronchitis',
    },
    {
      label: 'fibro',
    },
  ];
  const [pillsState, setPillsState] = useState(pills);

  const handleOnRemove = (pillKey, metaData) => {
    const pillsArray = pillsState;
    pillsArray.splice(metaData.index, 1);
    setPillsState([...pillsArray]);
  };

  return (
    <Pills
      ariaLabel="Example of a Removable Pill"
      onRemove={handleOnRemove}
    >
      {pillsState.map((pill, index) => (
        <Pills.Pill
          label={pill.label}
          pillKey={pill.label}
          isRemovable
          metaData={{ index }}
        />
      ))}
    </Pills>
  );
};

export default BasicRemovablePill;
