import React from 'react';
import Slider from 'terra-slider';

const DisabledSlider = () => (
  <Slider isDisabled={true} minimumValue={0} maximumValue={100} />
);

export default DisabledSlider;