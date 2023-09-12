import React from 'react';
import Slider from 'terra-slider';

const DisabledSlider = () => (
  <Slider isDisabled minimumValue={0} maximumValue={100} labelName="Label" />
);

export default DisabledSlider;
