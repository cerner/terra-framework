import React from 'react';
import Pills from '@cerner/terra-pills/lib/index';

const BasicPill = () => (
  <Pills ariaLabel="Basic Pill Example">
    <Pills.Pill label="asthma" pillKey="asthma" id="terra-pills-example-basic-pill-asthma" />
  </Pills>
);

export default BasicPill;
