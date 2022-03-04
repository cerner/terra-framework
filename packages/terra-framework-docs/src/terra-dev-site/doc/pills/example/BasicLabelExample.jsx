import React, { useState } from 'react';
import classNamesBind from 'classnames/bind';
import { Button as DocsButton } from '@cerner/terra-docs';
import FilterPills, { Pill } from '@cerner/terra-pills';
import ThemeContext from 'terra-theme-context';
import styles from './FilterPillsCommon.module.scss';

const cx = classNamesBind.bind(styles);

const BasicLabelExample = () => {
  const theme = React.useContext(ThemeContext);

  const pillsData = [
    {
      label: 'Asthma',
      id: 'terra-filter-pills-asthma',
    },
    {
      label: 'Bronchitis',
      id: 'terra-filter-pills-bronchitis',
    },
    {
      label: 'Fibro',
      id: 'terra-filter-pills-fibro',
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
      <FilterPills
        ariaLabel="Demonstration example of Filter Pills with basic labels"
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

BasicLabelExample.contextType = ThemeContext;

export default BasicLabelExample;
