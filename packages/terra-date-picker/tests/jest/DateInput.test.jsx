import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import { v4 as uuidv4 } from 'uuid';
import DateInput from '../../lib/DateInput';

let mockSpyUuid;
beforeAll(() => {
  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
});

afterAll(() => {
  mockSpyUuid.mockRestore();
});

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
  const refCallback = jest.fn();
  const dateInput = mountWithIntl((
    <DateInput
      ariaLabel="Aria Label text"
      buttonRefCallback={refCallback}
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
