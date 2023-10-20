import React from 'react';
import Slider from 'terra-slider';

const CustomMinMaxLabelSlider = () => (
  <Slider
    minimumValue={0}
    maximumValue={100}
    labelText="Field Label"
    minimumLabel="label"
    maximumLabel="label"
    value={20}
  />
);

export default CustomMinMaxLabelSlider;
