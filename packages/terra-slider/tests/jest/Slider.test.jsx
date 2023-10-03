import React from 'react';
import Slider from '../../src/Slider';

describe('Slider', () => {
  it('should render a default slider', () => {
    const wrapper = shallow(
      <Slider minimumValue={0} maximumValue={100} labelName="testLabel" defaultValue={50} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled slider', () => {
    const wrapper = shallow(
      <Slider isDisabled minimumValue={0} maximumValue={100} labelName="testLabel" defaultValue={50} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a slider with custom min and max labels', () => {
    const wrapper = shallow(
      <Slider minimumValue={0} maximumValue={100} labelName="testLabel" minimumLabel="testMinimumLabel" maximumLabel="testMaximumLabel" defaultValue={50} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
