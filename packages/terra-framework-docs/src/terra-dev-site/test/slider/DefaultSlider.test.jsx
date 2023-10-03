import React from 'react';
import Slider from 'terra-slider';

const DefaultSlider = () => (
  <Slider minimumValue={0} maximumValue={100} labelName="Label" defaultValue={50} />
);

export default DefaultSlider;
