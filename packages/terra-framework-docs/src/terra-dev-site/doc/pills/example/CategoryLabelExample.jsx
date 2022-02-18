import React, { useState } from 'react';
import FilterPills, { Pill } from '@cerner/terra-pills';

const CategoryLabelExample = () => {
  const pillsData = [
    {
      label: 'asthma',
      labelCategory: 'respiratory',
      id: 'terra-filter-pills-removable-pill-asthma',
    },
    {
      label: 'bronchitis',
      labelCategory: 'respiratory',
      id: 'terra-filter-pills-removable-pill-bronchitis',
    },
    {
      label: 'fibro',
      labelCategory: 'respiratory',
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
        ariaLabel="Example of Filter Pills with category label"
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

export default CategoryLabelExample;
