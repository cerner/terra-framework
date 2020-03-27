import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { renderWithIntl } from 'terra-enzyme-intl';
import DateInput from '../../lib/DateInput';

it('should render a default date input', () => {
  const dateInput = renderWithIntl(<DateInput placeholder="MM/DD/YYYY" />);
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
  const dateInput = renderWithIntl((
    <DateInput
      placeholder="MM/DD/YYYY"
      buttonRefCallback={refCallback}
    />
  ));
  const testComponent = dateInput.children();
  setTimeout(() => {
    expect(refCallback).toBeCalled();
  });
  expect(testComponent).toMatchSnapshot();
});
