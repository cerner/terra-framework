import React, { useState } from 'react';
import classNames from 'classnames/bind';
import FilterPills from '@cerner/terra-pills/lib/index';

import styles from './FilterPillsTestCommon.module.scss';

const cx = classNames.bind(styles);

const SingleSelectableRemovableFilterPill = () => {
  const [showPill, setShowPill] = useState(true);

  const handleOnRemove = () => {
    setShowPill(false);
  };

  return (
    <>
      <FilterPills
        ariaLabel="Example of single selectable and removable Filter Pill"
        onRemove={handleOnRemove}
        className={cx(['show-border', 'width-10'])}
      >
        {showPill
          && (
            <FilterPills.Pill
              label="Bronchitis is a treatable disease"
              labelCategory="Respiratory"
              id="single-selectable-removable-filter-pill-bronchitis"
              key="single-selectable-removable-filter-pill-bronchitis"
              pillKey="bronchitis"
            />
          )}
      </FilterPills>
      {!showPill
        && <button type="button" onClick={() => setShowPill(true)}>Show Pill</button>}
    </>
  );
};

export default SingleSelectableRemovableFilterPill;
