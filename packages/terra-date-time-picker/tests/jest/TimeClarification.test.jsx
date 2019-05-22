import React from 'react';
import moment from 'moment-timezone';
/* eslint-disable import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import TimeClarification from '../../lib/_TimeClarification';

it('should render a default date time picker', () => {
  const datePicker = shallowWithIntl((
    <TimeClarification
      dateTime={moment('2017-04-01T10:30')}
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
      dateTime={moment('2017-04-01T10:30')}
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
