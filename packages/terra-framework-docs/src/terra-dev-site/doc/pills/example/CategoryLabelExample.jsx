import React, { useState } from 'react';
import classNamesBind from 'classnames/bind';
import { Button as DocsButton } from '@cerner/terra-docs';
import FilterPills, { Pill } from '@cerner/terra-pills';
import ThemeContext from 'terra-theme-context';
import styles from './FilterPillsCommon.module.scss';

const cx = classNamesBind.bind(styles);

const CategoryLabelExample = () => {
  const theme = React.useContext(ThemeContext);

  const pillsData = [
    {
      label: 'Asthma',
      labelCategory: 'Respiratory',
      id: 'terra-filter-pills-respiratory-asthma',
    },
    {
      label: 'Bronchitis',
      labelCategory: 'Respiratory',
      id: 'terra-filter-pills-respiratory-bronchitis',
    },
    {
      label: 'Fibro',
      labelCategory: 'Respiratory',
      id: 'terra-filter-pills-respiratory-fibro',
    },
  ];
  const [pills, setPills] = useState(pillsData);

  const handleResetClick = () => {
    setPills(pillsData);
  };

  const handleOnRemove = (id, metaData) => {
    const pillsArray = pills;
    pillsArray.splice(metaData.index, 1);
    setPills([...pillsArray]);
  };

  return (
    <>
      <FilterPills
        ariaLabel="Demonstration example of Filter Pills with category labels"
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
      <DocsButton
        className={cx(['terra-docs-example-reset-button', theme.className])}
        onClick={handleResetClick}
      >
        Reset Example
      </DocsButton>
    </>
  );
};

CategoryLabelExample.contextType = ThemeContext;

export default CategoryLabelExample;
