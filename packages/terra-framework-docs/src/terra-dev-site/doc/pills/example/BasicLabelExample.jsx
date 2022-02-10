import React, { useState } from 'react';
import FilterPills from 'terra-pills';

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

  const handleOnRemove = (pillKey, metaData) => {
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
          <FilterPills.Pill
            label={pill.label}
            labelCategory={pill.labelCategory}
            id={pill.id}
            key={pill.id}
            pillKey={pill.label}
            metaData={{ index }}
          />
        ))}
      </FilterPills>
      {pills.length <= 0
        && <button type="button" onClick={() => setPills(pillsData)}>Reset</button>}
    </>
  );
};

export default BasicLabelExample;
