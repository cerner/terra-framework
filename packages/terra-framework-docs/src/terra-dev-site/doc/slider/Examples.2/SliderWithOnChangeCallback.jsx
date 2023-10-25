import React, { useState } from 'react';
import Slider from 'terra-slider';

const SliderWithOnChangeCallback = () => {
  const [value, setValue] = useState('');

  const handleChange = (v) => {
    setValue(v);
  };
  const message = value ? `Updated Slider value is: ${value}` : 'Change the value of Slider to trigger callback';

  return (
    <>
      <Slider
        minimumValue={0}
        maximumValue={100}
        label="Zoom"
        value={20}
        onChange={handleChange}
      />
      <p>{message}</p>
    </>
  );
};

export default SliderWithOnChangeCallback;
