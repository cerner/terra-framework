import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { renderWithIntl } from 'terra-enzyme-intl';
import DateInput from '../../lib/DateInput';

it('should render a default date input', () => {
  const dateInput = renderWithIntl(<DateInput />);
  expect(dateInput).toMatchSnapshot();
});

it('should render a default date input with all props', () => {
  const dateInput = renderWithIntl((
    <DateInput
      inputAttributes={{ id: 'terra-date-input' }}
      name="date-input"
      placeholder="MM/DD/YYYY"
      value="01/01/2017"
      onChange={() => {}}
      onClick={() => {}}
      onKeyDown={() => {}}
    />
  ));

  expect(dateInput).toMatchSnapshot();
});

it('throws error on missing locale prop in Base', () => {
  global.console = { error: jest.fn() };

  expect(() => {
    render(<DateInput name="date-input" />);
  }).toThrowError();
  // eslint-disable-next-line no-console
  expect(console.error).toBeCalledWith(expect.stringContaining('Component is internationalized, and must be wrapped in terra-base'));
});
