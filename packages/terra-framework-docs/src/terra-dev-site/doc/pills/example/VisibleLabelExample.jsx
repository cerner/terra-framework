import React, { useState } from 'react';
import classNamesBind from 'classnames/bind';
import { Button as DocsButton } from '@cerner/terra-docs';
import FilterPills, { Pill } from '@cerner/terra-pills';
import Text from 'terra-text';
import ThemeContext from 'terra-theme-context';
import styles from './FilterPillsCommon.module.scss';

const cx = classNamesBind.bind(styles);

const VisibleLabelExample = () => {
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

  const handleOnRemove = (id, metaData) => {
    const pillsArray = pills;
    pillsArray.splice(metaData.index, 1);
    setPills([...pillsArray]);
  };

  const handleResetClick = () => {
    setPills(pillsData);
  };

  const patientEducationSearchTermsLabel = 'Patient Education Search Terms:';
  const patientEducationSearchTermsLabelId = 'terra-filter-pills-example-patient-education-search-terms-label';

  return (
    <>
      <div className={cx(['terra-filter-pills-doc-example-search-terms', theme.className])}>
        <Text
          id={patientEducationSearchTermsLabelId}
          className={cx('search-terms-label')}
        >
          {patientEducationSearchTermsLabel}
        </Text>
        <FilterPills
          ariaLabelledBy={patientEducationSearchTermsLabelId}
          ariaLabel={patientEducationSearchTermsLabel}
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
        className={cx(['terra-docs-example-reset-button', theme.className])}
        onClick={handleResetClick}
      >
        Reset Example
      </DocsButton>
    </>
  );
};

VisibleLabelExample.contextType = ThemeContext;

export default VisibleLabelExample;
