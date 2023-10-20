import React, { useState } from 'react';
import Slider from 'terra-slider';

const SliderWithOnChangeCallback = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const message = value ? `Updated Slider value is: ${value}` : 'Change the value of Slider to trigger callback';

  return (
    <div>
      <Slider
        minimumValue={0}
        maximumValue={100}
        labelText="Zoom"
        value={20}
        onChange={handleChange}
      />
      <p>{message}</p>
    </div>
  );
};

export default SliderWithOnChangeCallback;
