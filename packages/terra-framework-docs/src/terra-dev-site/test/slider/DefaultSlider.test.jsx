import React from 'react';
import Slider from 'terra-slider';

const DefaultSlider = () => (
  <Slider
    minimumValue={0}
    maximumValue={100}
    label="Label"
    value={50}
  />
);

export default DefaultSlider;
