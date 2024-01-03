import React, { useState } from 'react';
import Slider from 'terra-slider';

const SliderWithOnChangeCallback = () => {
  const [value, setValue] = useState(20);

  const handleChange = (v) => {
    setValue(v);
  };
  const message = `Slider value is: ${value}`;

  return (
    <>
      <Slider
        minimumValue={0}
        maximumValue={100}
        label="Zoom"
        value={value}
        onChange={handleChange}
      />
      <p>{message}</p>
    </>
  );
};

export default SliderWithOnChangeCallback;
