import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { mountWithIntl, renderWithIntl } from 'terra-enzyme-intl';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import DateInput from '../../lib/DateInput';

jest.mock('uuid/v4', () => () => '00000000-0000-0000-0000-000000000000');

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
      onBlur={() => {}}
      onChange={() => {}}
      onClick={() => {}}
      onKeyDown={() => {}}
    />
  ));

  expect(dateInput).toMatchSnapshot();
});

it('should pass in refCallback as the ref prop of the calendar button', () => {
  const refCallback = jest.fn();
  const dateInput = mountWithIntl(<DateInput buttonRefCallback={refCallback} />);
  const testComponent = dateInput.children();
  expect(refCallback).toBeCalled();
  expect(testComponent).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const date = mountWithIntl(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <DateInput />
    </ThemeContextProvider>,
  );
  expect(date).toMatchSnapshot();
});
