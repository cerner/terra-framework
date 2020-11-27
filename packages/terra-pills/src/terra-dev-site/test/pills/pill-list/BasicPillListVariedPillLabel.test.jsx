import React from 'react';
import PillList from '../../../../PillList';
import Pill from '../../../../Pill';

const BasicPillListVariedPillLabel = () => (
  <PillList
    ariaLabel="Terra Modal"
  >
    <Pill
      labelText="Demo"
    />
    <Pill
      labelText="Long Label"
    />
    <Pill
      labelText="Very Long Label"
    />
    <Pill
      labelText="Very Long Label which should show ellipses"
    />
    <Pill
      labelText="Random"
    />
    <Pill
      labelText="Random 2"
    />
  </PillList>
);

export default BasicPillListVariedPillLabel;
