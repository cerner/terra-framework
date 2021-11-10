import React, { useState } from 'react';
import classNames from 'classnames/bind';
import FilterPills from '@cerner/terra-pills/lib/index';

import styles from './FilterPillsTestCommon.module.scss';

const cx = classNames.bind(styles);

const SingleRemovableFilterPill = () => {
  const [showPill, setShowPill] = useState(true);

  const handleOnRemove = () => {
    setShowPill(false);
  };

  return (
    <>
      <FilterPills
        ariaLabel="Example of Single Removable Filter Pill"
        onRemove={handleOnRemove}
        className={cx(['show-border'])}
      >
        {showPill
          && (
            <FilterPills.Pill
              label="Bronchitis"
              labelCategory="Respiratory"
              id="single-removable-filter-pill-bronchitis"
              key="single-removable-filter-pill-bronchitis"
              pillKey="bronchitis"
            />
          )}
      </FilterPills>
      {!showPill
        && <button type="button" onClick={() => setShowPill(true)}>Show Pill</button>}
    </>
  );
};

export default SingleRemovableFilterPill;
