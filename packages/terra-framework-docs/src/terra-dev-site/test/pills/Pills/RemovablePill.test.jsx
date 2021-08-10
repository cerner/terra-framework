import React, { useState } from 'react';
import Pills from 'terra-pills/lib/index';

const BasicRemovablePill = () => {
  const pills = [
    {
      label: 'asthma',
      id: 'terra-removable-pill-asthma',
      isRemovable: false,
    },
    {
      label: 'bronchitis',
      id: 'terra-removable-pill-bronchitis',
      isRemovable: false,
    },
    {
      label: 'fibro',
      id: 'terra-removable-pill-fibro',
      isRemovable: true,
    },
    {
      label: 'asthma',
      id: 'terra-removable-pill-asthma1',
      isRemovable: false,
    },
    {
      label: 'bronchitis',
      id: 'terra-removable-pill-bronchitis1',
      isRemovable: true,
    },
    {
      label: 'fibro',
      id: 'terra-removable-pill-fibro1',
      isRemovable: false,
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
          isRemovable={pill.isRemovable}
          metaData={{ index }}
        />
      ))}
    </Pills>
  );
};

export default BasicRemovablePill;
