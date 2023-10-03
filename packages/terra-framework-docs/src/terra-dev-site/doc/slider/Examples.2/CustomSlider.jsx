import React from 'react';
import Slider from 'terra-slider';

const CustomSlider = () => (
  <Slider minimumValue={0} maximumValue={100} labelName="Field Label" minimumLabel="0%" maximumLabel="100%" defaultValue={20}/>
);

export default CustomSlider;
