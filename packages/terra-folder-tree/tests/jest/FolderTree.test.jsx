import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import FolderTree from '../../src/FolderTree';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation();
  jest.spyOn(console, 'warn').mockImplementation();
});

afterAll(() => {
  console.error.mockRestore(); // eslint-disable-line no-console
  console.warn.mockRestore(); // eslint-disable-line no-console
});

describe('placeholder', () => {
  it('placeholder', () => {
    const wrapper = shallowWithIntl(
      <FolderTree />,
    ).dive();

    expect(wrapper).toMatchSnapshot();
  });
});
