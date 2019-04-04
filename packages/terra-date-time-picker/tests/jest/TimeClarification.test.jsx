import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
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
      releaseFocus={jest.fn()}
      requestFocus={jest.fn()}
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
      releaseFocus={jest.fn()}
      requestFocus={jest.fn()}
      disabled
    />
  ));
  expect(datePicker).toMatchSnapshot();
});
