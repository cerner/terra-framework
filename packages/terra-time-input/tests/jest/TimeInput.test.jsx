/* globals spyOn jest */

import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl, renderWithIntl } from 'terra-enzyme-intl';
import KeyCode from 'keycode-js';
import TimeInput from '../../src/TimeInput';

const mockEvent = {
  preventDefault: jest.fn(),
};

const handleOnChange = () => {
};

const handleOnBlur = () => {
};

it('should render a default time input', () => {
  const timeInput = <TimeInput name="time-input" />;
  const wrapper = shallowWithIntl(timeInput);
  expect(wrapper).toMatchSnapshot();
});

it('should render a time input with custom attributes', () => {
  const timeInput = <TimeInput name="time-input" inputAttributes={{ id: 'terra-time-input' }} />;
  const wrapper = shallowWithIntl(timeInput);
  expect(wrapper).toMatchSnapshot();
});

it('should render a time input with a default time', () => {
  const timeInput = <TimeInput name="time-input" value="10:45" />;
  const wrapper = shallowWithIntl(timeInput);
  expect(wrapper).toMatchSnapshot();
});

it('should render a time input with onChange', () => {
  const timeInput = <TimeInput name="time-input" onChange={handleOnChange} />;
  const wrapper = shallowWithIntl(timeInput);
  expect(wrapper).toMatchSnapshot();
});

it('should render a time input with onBlur', () => {
  const timeInput = <TimeInput name="time-input" onBlur={handleOnBlur} />;
  const wrapper = shallowWithIntl(timeInput);
  expect(wrapper).toMatchSnapshot();
});

it('should render a time input with onInputFocus', () => {
  const timeInput = <TimeInput name="time-input" onBlur={() => {}} />;
  const wrapper = shallowWithIntl(timeInput);
  expect(wrapper).toMatchSnapshot();
});

it('should render a time input with 12 hour clock set', () => {
  const timeInput = <TimeInput name="time-input" variant="12-hour" />;
  const wrapper = shallowWithIntl(timeInput);
  expect(wrapper).toMatchSnapshot();
});

it('should ignore invalid times properly', () => {
  const timeInput = <TimeInput name="time-input" value="11:2" />;
  const wrapper = shallowWithIntl(timeInput);
  expect(wrapper).toMatchSnapshot();

  expect(wrapper.instance().state.hour).toEqual('');
  expect(wrapper.instance().state.minute).toEqual('');
});

it('should render a 24 hour timepicker properly on mobile devices', () => {
  spyOn(window, 'matchMedia').and.returnValue({ matches: true });
  window.ontouchstart = 'true';

  const timeInput = <TimeInput name="time-input" />;
  const wrapper = renderWithIntl(timeInput);
  expect(wrapper).toMatchSnapshot();
  delete window.ontouchstart;
});

it('should set the labels with the correct htmlFor a 24 hour timepicker properly on mobile devices', () => {
  spyOn(window, 'matchMedia').and.returnValue({ matches: true });
  window.ontouchstart = 'true';

  const timeInput = <TimeInput name="time-input" minuteAttributes={{ id: 'id-1' }} hourAttributes={{ id: 'id-2' }} />;
  const wrapper = renderWithIntl(timeInput);
  expect(wrapper).toMatchSnapshot();
  delete window.ontouchstart;
});

it('should render a 12 hour timepicker meridiem with buttons when viewed on a mobile device', () => {
  spyOn(window, 'matchMedia').and.returnValue({ matches: true });
  window.ontouchstart = 'true';

  const timeInput = <TimeInput name="time-input" variant="12-hour" />;
  const wrapper = renderWithIntl(timeInput);
  expect(wrapper).toMatchSnapshot();
  delete window.ontouchstart;
});

it('should not have duplicate ids on the page when multiple date pickers are initialized', () => {
  spyOn(window, 'matchMedia').and.returnValue({ matches: true });
  window.ontouchstart = 'true';

  const wrapper = renderWithIntl(
    <div>
      <TimeInput name="time-input" variant="12-hour" />
      <TimeInput name="time-input-2" variant="12-hour" />
      <TimeInput name="time-input-3" variant="12-hour" />
    </div>,
  );

  expect(wrapper).toMatchSnapshot();
  delete window.ontouchstart;
});

it('should render a disabled time input', () => {
  const timeInput = <TimeInput name="time-input" disabled />;
  const wrapper = shallowWithIntl(timeInput);
  expect(wrapper).toMatchSnapshot();
});

it('should handle focusing on the hour input without error', () => {
  mockEvent.keyCode = KeyCode.KEY_RIGHT;
  const timeInput = <TimeInput name="time-input" disabled />;
  const wrapper = mountWithIntl(timeInput);
  wrapper.instance().handleHourInputKeyDown(mockEvent);
  expect(mockEvent.preventDefault).toHaveBeenCalled();
});

it('should handle focusing on the minute input without error', () => {
  mockEvent.keyCode = KeyCode.KEY_LEFT;
  const timeInput = <TimeInput name="time-input" disabled />;
  const wrapper = mountWithIntl(timeInput);
  wrapper.instance().setState({ hour: 2 });
  wrapper.instance().handleMinuteInputKeyDown(mockEvent);
  expect(mockEvent.preventDefault).toHaveBeenCalled();
});

it('should handle focusing on the meridiem input without error', () => {
  mockEvent.keyCode = KeyCode.KEY_RIGHT;
  const timeInput = <TimeInput name="time-input" variant="12-hour" />;
  const wrapper = mountWithIntl(timeInput);
  wrapper.instance().handleMinuteInputKeyDown(mockEvent);
  expect(mockEvent.preventDefault).toHaveBeenCalled();
});
