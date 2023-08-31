import React from 'react';
import { shallowWithIntl } from 'terra-enzyme-intl';
import FilePath from '../../src/FilePath';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation();
  jest.spyOn(console, 'warn').mockImplementation();
});

afterEach(() => {
  console.error.mockClear(); // eslint-disable-line no-console
  console.warn.mockClear(); // eslint-disable-line no-console
});

afterAll(() => {
  console.error.mockRestore(); // eslint-disable-line no-console
  console.warn.mockRestore(); // eslint-disable-line no-console
});

describe('placeholder', () => {
  it('placeholder', () => {
    const wrapper = shallowWithIntl(
      <FilePath />,
    ).dive();

    expect(wrapper).toMatchSnapshot();
  });
});
