import React, { useState } from 'react';
import FilterPills, { Pill } from '@cerner/terra-pills';

const BasicLabelExample = () => {
  const pillsData = [
    {
      label: 'asthma',
      id: 'terra-filter-pills-removable-pill-asthma',
    },
    {
      label: 'bronchitis',
      id: 'terra-filter-pills-removable-pill-bronchitis',
    },
    {
      label: 'fibro',
      id: 'terra-filter-pills-removable-pill-fibro',
    },
  ];
  const [pills, setPills] = useState(pillsData);

  const handleOnRemove = (id, metaData) => {
    const pillsArray = pills;
    pillsArray.splice(metaData.index, 1);
    setPills([...pillsArray]);
  };

  return (
    <>
      <FilterPills
        ariaLabel="Example of Basic Filter Pill"
        onRemove={handleOnRemove}
      >
        {pills.map((pill, index) => (
          <Pill
            label={pill.label}
            labelCategory={pill.labelCategory}
            id={pill.id}
            key={pill.id}
            metaData={{ index }}
          />
        ))}
      </FilterPills>
      {pills.length <= 0
        && <button type="button" onClick={() => setPills(pillsData)}>Reset the Example</button>}
    </>
  );
};

export default BasicLabelExample;
