import React, { useState } from 'react';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { Button, Placeholder } from '@cerner/terra-docs';
import TerraButton from 'terra-button';
import Text from 'terra-text';
import Toolbar from 'terra-toolbar';
import Pills from '@cerner/terra-pills/lib/index';
import styles from './_DocExamplesCommon.module.scss';

const cx = classNames.bind(styles);

const CollapsiblePillsGroup = () => {
  const theme = React.useContext(ThemeContext);

  const pillsData = [
    {
      label: 'Category: Selection 1',
      id: 'terra-pills-example-collapsible-pill-category-1',
      isRemovable: true,
    },
    {
      label: 'Category: Selection 2',
      id: 'terra-pills-example-collapsible-pill-category-2',
      isRemovable: true,
    },
    {
      label: 'Category: Selection 3',
      id: 'terra-pills-example-collapsible-pill-category-3',
      isRemovable: true,
    },
    {
      label: 'Category: Selection 4',
      id: 'terra-pills-example-collapsible-pill-category-4',
      isRemovable: true,
    },
    {
      label: 'Category: Selection 5',
      id: 'terra-pills-example-collapsible-pill-category-5',
      isRemovable: true,
    },
    {
      label: 'Category: Selection 6',
      id: 'terra-pills-example-collapsible-pill-category-6',
      isRemovable: true,
    },
    {
      label: 'Category: Selection 7',
      id: 'terra-pills-example-collapsible-pill-category-7',
      isRemovable: true,
    },
    {
      label: 'Category: Selection 8',
      id: 'terra-pills-example-collapsible-pill-category-8',
      isRemovable: true,
    },
  ];
  const [pillsState, setPillsState] = useState(pillsData);
  const [isSingleLine, setIsSingleLine] = useState(true);

  const handleOnRemove = (pillKey, metaData) => {
    const pillsArray = pillsState;
    pillsArray.splice(metaData.index, 1);
    setPillsState([...pillsArray]);
  };

  const handleRollUpPillOnClick = () => {
    setIsSingleLine(false);
  };

  const handleRemoveAll = () => {
    // eslint-disable-next-line no-alert
    window.alert('You clicked "clear all" to remove all pills.');
  };

  const handleClickExampleRollup = () => {
    setIsSingleLine(!isSingleLine);
  };

  return (
    <>
      <div className={cx(['terra-pills-doc-example-applied-filters', theme.className])}>
        <Toolbar className={cx('applied-filters-toolbar')}>
          <div className={cx('applied-filters-flex-arrange')}>
            <div className={cx('applied-filters-label-flex')}>
              <Text
                id="terra-pills-example-collapsible-pill-list-label"
                className={cx('pill-list-label')}
              >
                Applied Filters:
              </Text>
            </div>
            <div className={cx('applied-filters-pilllist-flex')}>
              <Pills
                ariaLabel="Applied Filters"
                ariaLabelledBy="terra-pills-example-collapsible-pill-list-label"
                isSingleLine={isSingleLine}
                onSelectRollUp={handleRollUpPillOnClick}
                onRemove={handleOnRemove}
              >
                {pillsState.map((pill, index) => (
                  <Pills.Pill
                    label={pill.label}
                    id={pill.id}
                    key={pill.id}
                    pillKey={pill.label}
                    isRemovable={pill.isRemovable}
                    metaData={{ index }}
                  />
                ))}
              </Pills>
            </div>
            <div className={cx('applied-filters-clearbtn-flex')}>
              <TerraButton
                text="Clear All Filters"
                variant="de-emphasis"
                onClick={handleRemoveAll}
                className={cx('clear-filters-button')}
              />
            </div>
          </div>
        </Toolbar>
        <div className={cx('applied-filters-content-panel')}>
          <Placeholder title="Sample Filtered Content" />
        </div>
      </div>
      <br />
      <Button onClick={handleClickExampleRollup} disabled={isSingleLine} className={cx('toggle-active-button')}>Manually toggle roll-up and collapsing Pill-List (for example only)</Button>
    </>
  );
};

export default CollapsiblePillsGroup;
