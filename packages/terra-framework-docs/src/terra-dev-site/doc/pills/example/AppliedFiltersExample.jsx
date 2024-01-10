import React, { useState } from 'react';
import classNamesBind from 'classnames/bind';
import { Button as DocsButton, Placeholder } from '@cerner/terra-docs';
import Button from 'terra-button';
import FilterPills, { Pill } from '@cerner/terra-pills';
import Text from 'terra-text';
import ThemeContext from 'terra-theme-context';
import Toolbar from 'terra-toolbar';
import styles from './FilterPillsCommon.module.scss';

const cx = classNamesBind.bind(styles);

const AppliedFiltersExample = () => {
  const theme = React.useContext(ThemeContext);

  const pillsData = [];
  for (let pillCount = 1; pillCount < 11; pillCount += 1) {
    const pillData = {
      label: `Selection ${pillCount}`,
      labelCategory: 'Category',
      id: `terra-filter-pills-category-selection-${pillCount}`,
    };
    pillsData.push(pillData);
  }
  const [pills, setPills] = useState(pillsData);

  const handleOnRemove = (id, metaData) => {
    const pillsArray = pills;
    pillsArray.splice(metaData.index, 1);
    setPills([...pillsArray]);
  };

  const handleResetClick = () => {
    setPills(pillsData);
  };

  const appliedFiltersLabel = 'Applied Filters:';

  return (
    <>
      <div className={cx(['terra-filter-pills-doc-example-applied-filters', theme.className])}>
        <Toolbar className={cx('terra-filter-pills-doc-example-applied-filters-toolbar')}>
          <div className={cx('toolbar-flex-container')}>
            <div className={cx('toolbar-flex-item-start')}>
              <Text
                className={cx('applied-filters-label')}
              >
                {appliedFiltersLabel}
              </Text>
            </div>
            <div className={cx('toolbar-flex-item-fill')}>
              <FilterPills
                ariaLabel={appliedFiltersLabel}
                isCollapsible
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
            <div className={cx('toolbar-flex-item-end')}>
              <Button
                text="Clear All Filters"
                aria-label="Clear All Applied Filters"
                variant="de-emphasis"
                onClick={() => setPills([])}
              />
            </div>
          </div>
        </Toolbar>
        <div className={cx('applied-filters-content-panel')}>
          <Placeholder title="Filtered Content Goes Here" />
        </div>
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

AppliedFiltersExample.contextType = ThemeContext;

export default AppliedFiltersExample;
