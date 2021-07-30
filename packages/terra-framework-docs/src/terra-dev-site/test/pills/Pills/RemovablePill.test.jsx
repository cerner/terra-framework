import React, { useState } from 'react';
import Pills from 'terra-pills/lib/index';

const BasicRemovablePill = () => {
  const pills = [
    {
      label: 'asthma',
      id: 'terra-removable-pill-asthma',
    },
    {
      label: 'bronchitis',
      id: 'terra-removable-pill-bronchitis',
    },
    {
      label: 'fibro',
      id: 'terra-removable-pill-fibro',
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
      ariaLabel="Example of Removable Pills"
      onRemove={handleOnRemove}
    >
      {pillsState.map((pill, index) => (
        <Pills.Pill
          key={pill.id}
          label={pill.label}
          id={pill.id}
          pillKey={pill.label}
          isRemovable
          metaData={{ index }}
        />
      ))}
    </Pills>
  );
};

export default BasicRemovablePill;
