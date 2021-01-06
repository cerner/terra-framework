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

it('should render a date input with isInvalid prop', () => {
  const dateInput = renderWithIntl(<DateInput isInvalid />);
  expect(dateInput).toMatchSnapshot();
});

it('should render a date input with isIncomplete and required props', () => {
  const dateInput = renderWithIntl(<DateInput isIncomplete required />);
  expect(dateInput).toMatchSnapshot();
});

it('should render a default date input with all props', () => {
  const refCallbackButton = jest.fn();
  const refCallbackInput = jest.fn();
  const dateInput = mountWithIntl((
    <DateInput
      ariaLabel="Aria Label text"
      buttonRefCallback={refCallbackButton}
      firstInputRefCallback={refCallbackInput}
      inputAttributes={{ id: 'terra-date-input' }}
      name="date-input"
      onBlur={() => {}}
      onButtonFocus={() => {}}
      onChange={() => {}}
      onClick={() => {}}
      onFocus={() => {}}
      onKeyDown={() => {}}
      value="01/01/2017"
    />
  ));
  const testComponent = dateInput.children();

  expect(testComponent).toMatchSnapshot();
});

it('should pass in refCallback as the ref prop of the calendar button', () => {
  const refCallbackButton = jest.fn();
  const refCallbackInput = jest.fn();
  const dateInput = mountWithIntl(<DateInput buttonRefCallback={refCallbackButton} firstInputRefCallback={refCallbackInput} />);
  const testComponent = dateInput.children();
  expect(refCallbackButton).toBeCalled();
  expect(testComponent).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const refCallback = jest.fn();
  const date = mountWithIntl(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <DateInput firstInputRefCallback={refCallback} />
    </ThemeContextProvider>,
  );
  expect(date).toMatchSnapshot();
});
