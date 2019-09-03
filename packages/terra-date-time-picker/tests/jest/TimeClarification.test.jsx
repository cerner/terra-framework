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
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
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
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render offset button after daylight savings button clicked', () => {
  moment.tz.guess = jest.fn(() => 'America/Chicago');
  const datePicker = shallowWithIntl((
    <TimeClarification
      ambiguousDateTime="2019-08-15T10:30:00"
      isOpen
      isOffsetButtonHidden
      onDaylightSavingButtonClick={jest.fn()}
      onStandardTimeButtonClick={jest.fn()}
      onOffsetButtonClick={jest.fn()}
      onRequestClose={jest.fn()}
      disabled
    />
  ));
  const wrapper = datePicker.dive();
  wrapper.find('.button-daylight').simulate('click');
  expect(wrapper).toMatchSnapshot();
});

it('should render offset button after standard time button clicked', () => {
  moment.tz.guess = jest.fn(() => 'America/Chicago');
  const datePicker = shallowWithIntl((
    <TimeClarification
      ambiguousDateTime="2019-02-15T10:30:00"
      isOpen
      isOffsetButtonHidden
      onDaylightSavingButtonClick={jest.fn()}
      onStandardTimeButtonClick={jest.fn()}
      onOffsetButtonClick={jest.fn()}
      onRequestClose={jest.fn()}
      disabled
    />
  ));
  const wrapper = datePicker.dive();
  wrapper.find('.button-standard').simulate('click');
  expect(wrapper).toMatchSnapshot();
});

it('should render offset button after daylight savings button clicked in the southern hemisphere timezone', () => {
  moment.tz.guess = jest.fn(() => 'Australia/Sydney');
  const datePicker = shallowWithIntl((
    <TimeClarification
      ambiguousDateTime="2019-04-01T02:30:00"
      isOpen
      isOffsetButtonHidden
      onDaylightSavingButtonClick={jest.fn()}
      onStandardTimeButtonClick={jest.fn()}
      onOffsetButtonClick={jest.fn()}
      onRequestClose={jest.fn()}
      disabled
    />
  ));
  const wrapper = datePicker.dive();
  wrapper.find('.button-daylight').simulate('click');
  expect(wrapper).toMatchSnapshot();
});

it('should render offset button after standard time button clicked in the southern hemisphere timezone', () => {
  moment.tz.guess = jest.fn(() => 'Australia/Sydney');
  const datePicker = shallowWithIntl((
    <TimeClarification
      ambiguousDateTime="2019-10-01T02:30:00"
      isOpen
      isOffsetButtonHidden
      onDaylightSavingButtonClick={jest.fn()}
      onStandardTimeButtonClick={jest.fn()}
      onOffsetButtonClick={jest.fn()}
      onRequestClose={jest.fn()}
      disabled
    />
  ));
  const wrapper = datePicker.dive();
  wrapper.find('.button-standard').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
