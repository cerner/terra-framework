import React from 'react';
import Slider from 'terra-slider';

const DisabledSlider = () => (
  <Slider isDisabled minimumValue={0} maximumValue={100} labelName="Label" value="50" defaultValue={50} />
);

export default DisabledSlider;
