import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import moment from 'moment-timezone';
import TimeClarification from '../../lib/_TimeClarification';

it('should render a default date time picker', () => {
  const datePicker = shallowWithIntl((
    <TimeClarification
      isOpen
      isOffsetButtonHidden
      onDaylightSavingButtonClick={jest.fn()}
      onStandardTimeButtonClick={jest.fn()}
      onOffsetButtonClick={jest.fn()}
      onRequestClose={jest.fn()}
    />
  ));
  expect(datePicker).toMatchSnapshot();
});

it('should render a disabled time clarification', () => {
  const datePicker = shallowWithIntl((
    <TimeClarification
      isOpen
      isOffsetButtonHidden
      onDaylightSavingButtonClick={jest.fn()}
      onStandardTimeButtonClick={jest.fn()}
      onOffsetButtonClick={jest.fn()}
      onRequestClose={jest.fn()}
      disabled
    />
  ));
  expect(datePicker).toMatchSnapshot();
});

it('should render offset button after daylight savings button clicked', () => {
  moment.tz.guess = jest.fn(() => 'America/Chicago');
  const datePicker = shallowWithIntl((
    <TimeClarification
      isOpen
      isOffsetButtonHidden
      onDaylightSavingButtonClick={jest.fn()}
      onStandardTimeButtonClick={jest.fn()}
      onOffsetButtonClick={jest.fn()}
      onRequestClose={jest.fn()}
      disabled
    />
  ));
  datePicker.find('.button-daylight').simulate('click');
  expect(datePicker).toMatchSnapshot();
});

it('should render offset button after standard time button clicked', () => {
  moment.tz.guess = jest.fn(() => 'America/Chicago');
  const datePicker = shallowWithIntl((
    <TimeClarification
      isOpen
      isOffsetButtonHidden
      onDaylightSavingButtonClick={jest.fn()}
      onStandardTimeButtonClick={jest.fn()}
      onOffsetButtonClick={jest.fn()}
      onRequestClose={jest.fn()}
      disabled
    />
  ));
  datePicker.find('.button-standard').simulate('click');
  expect(datePicker).toMatchSnapshot();
});
