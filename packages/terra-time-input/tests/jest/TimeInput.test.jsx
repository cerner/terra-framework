/* globals spyOn */

import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl, renderWithIntl } from 'terra-enzyme-intl';
import * as KeyCode from 'keycode-js';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import TimeInput from '../../lib/TimeInput';
import TimeUtil from '../../lib/TimeUtil';

const mockEvent = {
  preventDefault: jest.fn(),
};

beforeEach(() => {
  mockEvent.preventDefault.mockClear();
});

it('should render a default time input', () => {
  const timeInput = <TimeInput name="time-input" />;
  const wrapper = shallowWithIntl(timeInput);
  const testComponent = wrapper.dive();
  expect(testComponent).toMatchSnapshot();
});

it('should render a time input with custom attributes', () => {
  const timeInput = <TimeInput name="time-input" inputAttributes={{ id: 'terra-time-input' }} />;
  const wrapper = shallowWithIntl(timeInput);
  const testComponent = wrapper.dive();
  expect(testComponent).toMatchSnapshot();
});

it('should render a time input with a default time', () => {
  const timeInput = <TimeInput name="time-input" value="10:45" />;
  const wrapper = shallowWithIntl(timeInput);
  const testComponent = wrapper.dive();
  expect(testComponent).toMatchSnapshot();
});

it('should render a time input with onChange', () => {
  const timeInput = <TimeInput name="time-input" onChange={() => {}} />;
  const wrapper = shallowWithIntl(timeInput);
  const testComponent = wrapper.dive();
  expect(testComponent).toMatchSnapshot();
});

it('should render a time input with onBlur', () => {
  const timeInput = <TimeInput name="time-input" onBlur={() => {}} />;
  const wrapper = shallowWithIntl(timeInput);
  const testComponent = wrapper.dive();
  expect(testComponent).toMatchSnapshot();
});

it('should render a time input with onFocus', () => {
  const timeInput = <TimeInput name="time-input" onFocus={() => {}} />;
  const wrapper = shallowWithIntl(timeInput);
  const testComponent = wrapper.dive();
  expect(testComponent).toMatchSnapshot();
});

it('should render a time input with 12 hour clock set', () => {
  const timeInput = <TimeInput name="time-input" variant="12-hour" />;
  const wrapper = shallowWithIntl(timeInput);
  const testComponent = wrapper.dive();
  expect(testComponent).toMatchSnapshot();
});

it('should ignore invalid times properly', () => {
  const timeInput = <TimeInput name="time-input" value="11:2" />;
  const wrapper = shallowWithIntl(timeInput);
  const testComponent = wrapper.dive();
  expect(testComponent).toMatchSnapshot();

  expect(testComponent.instance().state.hour).toEqual('');
  expect(testComponent.instance().state.minute).toEqual('');
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
  const testComponent = wrapper.dive();
  expect(testComponent).toMatchSnapshot();
});

it('should handle focusing on the hour input without error', () => {
  mockEvent.keyCode = KeyCode.KEY_RIGHT;
  const timeInput = <TimeInput name="time-input" disabled />;
  const wrapper = mountWithIntl(timeInput);
  const testComponent = wrapper.children();
  testComponent.instance().handleHourInputKeyDown(mockEvent);
  expect(mockEvent.preventDefault).toHaveBeenCalled();
});

it('should handle focusing on the minute input without error', () => {
  mockEvent.keyCode = KeyCode.KEY_LEFT;
  const timeInput = <TimeInput name="time-input" disabled />;
  const wrapper = mountWithIntl(timeInput);
  const testComponent = wrapper.children();
  testComponent.instance().setState({ hour: 2 });
  testComponent.instance().handleMinuteInputKeyDown(mockEvent);
  expect(mockEvent.preventDefault).toHaveBeenCalled();
});

it('should pass in refCallback as the ref prop of the hour input element', () => {
  const refCallback = jest.fn();
  const timeInput = <TimeInput name="time-input" refCallback={refCallback} />;
  const wrapper = mountWithIntl(timeInput);
  const testComponent = wrapper.children();
  expect(refCallback).toBeCalled();
  expect(testComponent).toMatchSnapshot();
});

it('should render a time input with seconds input', () => {
  const timeInput = <TimeInput name="time-input" showSeconds />;
  const wrapper = shallowWithIntl(timeInput);
  const testComponent = wrapper.dive();
  expect(testComponent).toMatchSnapshot();
});

it('should render a time input with seconds input and a value', () => {
  const timeInput = <TimeInput name="time-input" showSeconds value="12:12:12" />;
  const wrapper = shallowWithIntl(timeInput);
  const testComponent = wrapper.dive();
  expect(testComponent).toMatchSnapshot();
});

it('should render a time input with seconds input and custom attributes', () => {
  const timeInput = <TimeInput name="time-input" showSeconds inputAttributes={{ id: 'terra-time-input' }} secondAttributes={{ id: 'id-0' }} />;
  const wrapper = shallowWithIntl(timeInput);
  const testComponent = wrapper.dive();
  expect(testComponent).toMatchSnapshot();
});

it('should handle focusing on the seconds input without error', () => {
  mockEvent.keyCode = KeyCode.KEY_LEFT;
  const timeInput = <TimeInput name="time-input" disabled showSeconds />;
  const wrapper = mountWithIntl(timeInput);
  const testComponent = wrapper.children();
  testComponent.instance().setState({ hour: 2, minute: 15 });
  testComponent.instance().handleMinuteInputKeyDown(mockEvent);
  expect(mockEvent.preventDefault).toHaveBeenCalled();
});

it('should render a 12 hour clock time input with seconds input', () => {
  const timeInput = <TimeInput name="time-input" variant="12-hour" showSeconds />;
  const wrapper = shallowWithIntl(timeInput);
  const testComponent = wrapper.dive();
  expect(testComponent).toMatchSnapshot();
});

it('should render a 24 hour timepicker with seconds properly on mobile devices', () => {
  spyOn(window, 'matchMedia').and.returnValue({ matches: true });
  window.ontouchstart = 'true';

  const timeInput = <TimeInput name="time-input" showSeconds />;
  const wrapper = renderWithIntl(timeInput);
  expect(wrapper).toMatchSnapshot();
  delete window.ontouchstart;
});

it('should set the labels with the correct htmlFor a 24 hour timepicker properly on mobile devices', () => {
  spyOn(window, 'matchMedia').and.returnValue({ matches: true });
  window.ontouchstart = 'true';

  const timeInput = <TimeInput name="time-input" showSeconds secondAttributes={{ id: 'id-0' }} minuteAttributes={{ id: 'id-1' }} hourAttributes={{ id: 'id-2' }} />;
  const wrapper = renderWithIntl(timeInput);
  expect(wrapper).toMatchSnapshot();
  delete window.ontouchstart;
});

it('should render a 12 hour timepicker meridiem with buttons and seconds input when viewed on a mobile device', () => {
  spyOn(window, 'matchMedia').and.returnValue({ matches: true });
  window.ontouchstart = 'true';

  const timeInput = <TimeInput name="time-input" variant="12-hour" showSeconds />;
  const wrapper = renderWithIntl(timeInput);
  expect(wrapper).toMatchSnapshot();
  delete window.ontouchstart;
});

it('should ignore invalid times with seconds properly', () => {
  const timeInput = <TimeInput name="time-input" value="11:25:4" showSeconds />;
  const wrapper = shallowWithIntl(timeInput);
  const testComponent = wrapper.dive();
  expect(testComponent).toMatchSnapshot();

  expect(testComponent.instance().state.hour).toEqual('');
  expect(testComponent.instance().state.minute).toEqual('');
  expect(testComponent.instance().state.second).toEqual('');
});

it('should validate the incrementHour helper method', () => {
  expect(TimeUtil.incrementHour('11', TimeUtil.FORMAT_12_HOUR)).toEqual('12');
  expect(TimeUtil.incrementHour('12', TimeUtil.FORMAT_12_HOUR)).toEqual('01');
  expect(TimeUtil.incrementHour('0', TimeUtil.FORMAT_12_HOUR)).toEqual('01');
  expect(TimeUtil.incrementHour('11', TimeUtil.FORMAT_24_HOUR)).toEqual('12');
  expect(TimeUtil.incrementHour('12', TimeUtil.FORMAT_24_HOUR)).toEqual('13');
  expect(TimeUtil.incrementHour('23', TimeUtil.FORMAT_24_HOUR)).toEqual('23');
  expect(TimeUtil.incrementHour(undefined, TimeUtil.FORMAT_12_HOUR)).toEqual('12');
  expect(TimeUtil.incrementHour(undefined, TimeUtil.FORMAT_24_HOUR)).toEqual('00');
});

it('should validate the decrementHour helper method', () => {
  expect(TimeUtil.decrementHour('11', TimeUtil.FORMAT_12_HOUR)).toEqual('10');
  expect(TimeUtil.decrementHour('10', TimeUtil.FORMAT_12_HOUR)).toEqual('09');
  expect(TimeUtil.decrementHour('1', TimeUtil.FORMAT_12_HOUR)).toEqual('12');
  expect(TimeUtil.decrementHour('11', TimeUtil.FORMAT_24_HOUR)).toEqual('10');
  expect(TimeUtil.decrementHour('1', TimeUtil.FORMAT_24_HOUR)).toEqual('00');
  expect(TimeUtil.decrementHour('0', TimeUtil.FORMAT_24_HOUR)).toEqual('0');
  expect(TimeUtil.decrementHour(undefined, TimeUtil.FORMAT_12_HOUR)).toEqual('12');
  expect(TimeUtil.decrementHour(undefined, TimeUtil.FORMAT_24_HOUR)).toEqual('00');
});

it('should validate the incrementMinute helper method', () => {
  expect(TimeUtil.incrementMinute('11')).toEqual('12');
  expect(TimeUtil.incrementMinute('0')).toEqual('01');
  expect(TimeUtil.incrementMinute(undefined)).toEqual('00');
});

it('should validate the decrementMinute helper method', () => {
  expect(TimeUtil.decrementMinute('11')).toEqual('10');
  expect(TimeUtil.decrementMinute('10')).toEqual('09');
  expect(TimeUtil.decrementMinute('0')).toEqual('0');
  expect(TimeUtil.decrementMinute(undefined)).toEqual('00');
});

it('should validate the incrementSecond helper method', () => {
  expect(TimeUtil.incrementSecond('11')).toEqual('12');
  expect(TimeUtil.incrementSecond('0')).toEqual('01');
  expect(TimeUtil.incrementSecond(undefined)).toEqual('00');
});

it('should validate the decrementSecond helper method', () => {
  expect(TimeUtil.decrementSecond('11')).toEqual('10');
  expect(TimeUtil.decrementSecond('10')).toEqual('09');
  expect(TimeUtil.decrementSecond('0')).toEqual('0');
  expect(TimeUtil.decrementSecond(undefined)).toEqual('00');
});

it('should validate the splitHour helper method', () => {
  expect(TimeUtil.splitHour('23:32')).toEqual('23');
  expect(TimeUtil.splitHour('7:7')).toEqual('07');
  expect(TimeUtil.splitHour('27:70')).toEqual('');
  expect(TimeUtil.splitHour({ apple: true })).toEqual('');
});

it('should validate the splitMinute helper method', () => {
  expect(TimeUtil.splitMinute('23:32')).toEqual('32');
  expect(TimeUtil.splitMinute('23:7')).toEqual('07');
  expect(TimeUtil.splitMinute('23:70')).toEqual('');
  expect(TimeUtil.splitMinute('23')).toEqual('');
  expect(TimeUtil.splitMinute({ apple: true })).toEqual('');
});

it('should validate the splitSecond helper method', () => {
  expect(TimeUtil.splitSecond('23:47:32')).toEqual('32');
  expect(TimeUtil.splitSecond('23:47:7')).toEqual('07');
  expect(TimeUtil.splitSecond('23:47:70')).toEqual('');
  expect(TimeUtil.splitSecond('23:47')).toEqual('');
  expect(TimeUtil.splitSecond({ apple: true })).toEqual('');
});

it('should validate the validateTime helper method', () => {
  expect(TimeUtil.validateTime('23:47', false)).toBe(true);
  expect(TimeUtil.validateTime('25:47', false)).toBe(false);
  expect(TimeUtil.validateTime('23:67', false)).toBe(false);
  expect(TimeUtil.validateTime('23:471', false)).toBe(false);
  expect(TimeUtil.validateTime('23:47:32', false)).toBe(false);
  expect(TimeUtil.validateTime('23', false)).toBe(false);

  expect(TimeUtil.validateTime('23:47:09', true)).toBe(true);
  expect(TimeUtil.validateTime('23:47', true)).toBe(false);
  expect(TimeUtil.validateTime('23:47:60', true)).toBe(false);
});

it('should validate the getVariantFromLocale helper method', () => {
  const timeInput = <TimeInput name="time-input" variant="12-hour" />;
  const wrapper = mountWithIntl(timeInput);
  const testComponent = wrapper.children();

  if (['ar', 'en', 'en-AU', 'en-CA', 'en-GB', 'en-US', 'es', 'es-US'].includes(testComponent.instance().props.intl.locale)) {
    expect(TimeUtil.getVariantFromLocale(testComponent.instance().props)).toEqual('12-hour');
  } else {
    expect(TimeUtil.getVariantFromLocale(testComponent.instance().props)).toEqual('24-hour');
  }
});

it('correctly applies the theme context className', () => {
  const time = mountWithIntl(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <TimeInput name="time-input" />
    </ThemeContextProvider>,
  );
  expect(time).toMatchSnapshot();
});
