import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Slider from '../../src/Slider';

let mockSpyUuid;
beforeAll(() => {
  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
});

afterAll(() => {
  mockSpyUuid.mockRestore();
});

describe('Slider', () => {
  it('should render a default slider with proper required props', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <Slider minimumValue={0} maximumValue={100} label="testLabel" value={30} />,
    ).dive();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.label').text()).toEqual('testLabel');
    expect(wrapper.find('input').prop('min')).toEqual(0);
    expect(wrapper.find('input').prop('max')).toEqual(100);
    expect(wrapper.find('input').prop('value')).toEqual(30);
  });

  it('should render a disabled slider', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <Slider isDisabled minimumValue={0} maximumValue={100} label="testLabel" value={50} />,
    ).dive();
    expect(wrapper.find('input').prop('disabled')).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a slider with custom min and max labels', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <Slider minimumValue={0} maximumValue={100} label="testLabel" minimumLabel="testMinimumLabel" maximumLabel="testMaximumLabel" value={50} />,
    ).dive();
    expect(wrapper.find('.slider-label').at(0).text()).toEqual('testMinimumLabel');
    expect(wrapper.find('.slider-max-label').text()).toEqual('testMaximumLabel');
    expect(wrapper).toMatchSnapshot();
  });

  it('should update slider value correctly ', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <Slider isDisabled minimumValue={0} maximumValue={100} label="testLabel" value={50} />,
    );
    expect(wrapper.dive().find('input').prop('value')).toEqual(50);
    wrapper.setProps({ value: 30 });
    expect(wrapper.dive().find('input').prop('value')).toEqual(30);
  });
});
