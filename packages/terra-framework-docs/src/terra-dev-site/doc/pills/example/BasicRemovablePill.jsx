import React, { useState } from 'react';
import Pills from '@cerner/terra-pills/lib/index';

const BasicRemovablePills = () => {
  const pills = [
    {
      label: 'Asthma',
      id: 'terra-pills-example-removable-pill-asthma',
      isRemovable: true,
    },
  ];
  const [pillsState, setPillsState] = useState(pills);

  const handleOnRemove = (pillKey, metaData) => {
    const pillsArray = pillsState;
    pillsArray.splice(metaData.index, 1);
    setPillsState([...pillsArray]);
  };

  const createRemovablePill = () => (
    <Pills
      ariaLabel="Removable Pill Example"
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

  return (
    createRemovablePill()
  );
};

export default BasicRemovablePills;
