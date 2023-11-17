import React from 'react';
import Slider from 'terra-slider';

const SliderWithLongFieldLabel = () => (
  <Slider
    minimumValue={0}
    maximumValue={100}
    label="Adjust Screen Size here"
    minimumLabel="Min"
    maximumLabel="Max"
    value={20}
  />
);

export default SliderWithLongFieldLabel;
