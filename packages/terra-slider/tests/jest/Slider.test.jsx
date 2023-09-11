import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import Slider from '../../src/Slider';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation();
  jest.spyOn(console, 'warn').mockImplementation();
});

afterAll(() => {
  console.error.mockRestore(); // eslint-disable-line no-console
  console.warn.mockRestore(); // eslint-disable-line no-console
});

describe('Slider', () => {
  it('should render a default slider', () => {
    const wrapper = shallowWithIntl(
      <Slider minimumValue="0" maximumValue="100"/>,
    ).dive();

    expect(wrapper).toMatchSnapshot();
  });
  it('should render a disabled slider', () => {
    const wrapper = shallowWithIntl(
      <Slider isDisabled="true" minimumValue="0" maximumValue="100"/>,
    ).dive();

    expect(wrapper).toMatchSnapshot();
  });
});
