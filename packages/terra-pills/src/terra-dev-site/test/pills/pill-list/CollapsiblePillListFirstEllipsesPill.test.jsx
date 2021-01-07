import React from 'react';
import PillList from '../../../../PillList';
import Pill from '../../../../Pill';

const CollapsiblePillListFirstEllipsesPill = () => (
  <PillList
    ariaLabel="Pill Container"
    isCollapsible
  >
    <Pill
      label="Very Long Label which should show ellipses"
    />
    <Pill
      label="Random"
    />
  </PillList>
);

export default CollapsiblePillListFirstEllipsesPill;
