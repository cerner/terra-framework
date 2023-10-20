import React from 'react';
import Slider from 'terra-slider';

const CustomSlider = () => (
  <Slider
    minimumValue={0}
    maximumValue={100}
    labelText="Zoom"
    minimumLabel="0%"
    maximumLabel="100%"
    value={20}
  />
);

export default CustomSlider;
