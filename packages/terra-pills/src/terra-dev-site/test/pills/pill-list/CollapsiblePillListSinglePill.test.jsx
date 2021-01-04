import React from 'react';
import PillList from '../../../../PillList';
import Pill from '../../../../Pill';

const CollapsiblePillListSinglePill = () => (
  <PillList
    ariaLabel="Pill Container"
    isCollapsible
  >
    <Pill
      labelText="Demo"
    />
  </PillList>
);

export default CollapsiblePillListSinglePill;
