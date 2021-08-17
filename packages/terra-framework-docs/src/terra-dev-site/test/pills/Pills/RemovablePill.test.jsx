import React, { useState } from 'react';
import Pills from '@cerner/terra-pills/lib/index';

const BasicRemovablePill = () => {
  const pillsData = [
    {
      label: 'asthma',
      id: 'terra-removable-pill-asthma',
      isRemovable: false,
    },
    {
      label: 'bronchitis',
      id: 'terra-removable-pill-bronchitis',
      isRemovable: true,
    },
    {
      label: 'fibro',
      id: 'terra-removable-pill-fibro',
      isRemovable: false,
    },
    {
      label: 'hypertension',
      id: 'terra-removable-pill-hypertension',
      isRemovable: true,
    },
    {
      label: 'cardiac',
      id: 'terra-removable-pill-cardiac',
      isRemovable: true,
    },
  ];
  const [pills, setPills] = useState(pillsData);

  const handleOnRemove = (pillKey, metaData) => {
    const pillsArray = pills;
    pillsArray.splice(metaData.index, 1);
    setPills([...pillsArray]);
  };

  return (
    <Pills
      ariaLabel="Example of Removable Pills"
      onRemove={handleOnRemove}
    >
      {pills.map((pill, index) => (
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
