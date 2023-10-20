import React from 'react';
import Slider from 'terra-slider';

const DefaultSlider = () => (
  <Slider
    minimumValue={0}
    maximumValue={100}
    labelText="Label"
    value={50}
  />
);

export default DefaultSlider;
