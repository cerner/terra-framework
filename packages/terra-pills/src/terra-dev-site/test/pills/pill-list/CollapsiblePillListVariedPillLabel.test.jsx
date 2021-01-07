import React from 'react';
import PillList from '../../../../PillList';
import Pill from '../../../../Pill';

const CollapsiblePillListVariedPillLabel = () => (
  <PillList
    ariaLabel="Pill Container"
    isCollapsible
  >
    <Pill
      label="Demo"
    />
    <Pill
      label="Long Label"
    />
    <Pill
      label="Very Long Label"
    />
    <Pill
      label="Very Long Label which should show ellipses"
    />
    <Pill
      label="Random"
    />
    <Pill
      label="Random 2"
    />
  </PillList>
);

export default CollapsiblePillListVariedPillLabel;
