import React, { useState } from 'react';
import classNamesBind from 'classnames/bind';
import { Button as DocsButton } from '@cerner/terra-docs';
import FilterPills, { Pill } from '@cerner/terra-pills';
import ThemeContext from 'terra-theme-context';
import styles from './FilterPillsCommon.module.scss';

const cx = classNamesBind.bind(styles);

const FilterPillsWithLongLabel = () => {
  const theme = React.useContext(ThemeContext);

  const pillsData = [
    {
      label: 'Chronic Obstructive Pulmonary Disease (COPD)',
      labelCategory: 'Respiratory',
      id: 'terra-filter-pills-respiratory-copd',
    },
  ];
  const [pills, setPills] = useState(pillsData);
  const isResetButtonDisabled = (pills.length === pillsData.length);

  const handleOnRemove = (id, metaData) => {
    const pillsArray = pills;
    pillsArray.splice(metaData.index, 1);
    setPills([...pillsArray]);
  };

  return (
    <>
      <div className={cx(['terra-filter-pills-doc-example-truncated-label-container', theme.className])}>
        <FilterPills
          ariaLabel="Demonstration example of a Filter Pill with a long label"
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
      </div>
      <DocsButton
        aria-disabled={isResetButtonDisabled}
        className={cx(['terra-docs-example-reset-button', { 'is-disabled': isResetButtonDisabled }, theme.className])}
        disabled={isResetButtonDisabled}
        onClick={() => setPills(pillsData)}
      >
        Reset Example
      </DocsButton>
    </>
  );
};

FilterPillsWithLongLabel.contextType = ThemeContext;

export default FilterPillsWithLongLabel;
