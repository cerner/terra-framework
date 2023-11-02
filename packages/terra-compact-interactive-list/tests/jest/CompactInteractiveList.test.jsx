import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import CompactInteractiveList from '../../src/CompactInteractiveList';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation();
  jest.spyOn(console, 'warn').mockImplementation();
});

afterAll(() => {
  console.error.mockRestore(); // eslint-disable-line no-console
  console.warn.mockRestore(); // eslint-disable-line no-console
});

describe('placeholder for tests', () => {
  it('placeholder for a test', () => {
    const wrapper = shallowWithIntl(
      <CompactInteractiveList />,
    ).dive();

    expect(wrapper).toMatchSnapshot();
  });
});
