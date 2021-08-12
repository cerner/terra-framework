import React from 'react';
import Pills from '@cerner/terra-pills/lib/index';

const BasicPillTest = () => (
  <div>
    <Pills ariaLabel="Single Pill Example">
      <Pills.Pill id="Label" pillKey="Label" label="Label" />
    </Pills>
  </div>
);

export default BasicPillTest;
