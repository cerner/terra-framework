import React, { useState } from 'react';
import Slider from 'terra-slider';

const SliderWithValueUpdate = () => {
  const [value, setValue] = useState(20);

  const setSliderValue = () => {
    setValue(80);
  };

  const handleChange = (v) => {
    setValue(v);
  };
  const message = `Slider value is: ${value}`;

  return (
    <div>
      <Slider
        minimumValue={0}
        maximumValue={100}
        label="Zoom"
        value={value}
        onChange={handleChange}
      />
      <p>{message}</p>
      <button text="Set slider value" type="button" onClick={setSliderValue} id="slider-set-value-button"> Set slider value to 80 </button>
    </div>
  );
};

export default SliderWithValueUpdate;
