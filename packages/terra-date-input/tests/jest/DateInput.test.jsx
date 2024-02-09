import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import { v4 as uuidv4 } from 'uuid';
import DateInput from '../../src/DateInput';
import DateInputField from '../../src/DateInputField';
import DateInputUtil from '../../lib/DateInputUtil';

let mockSpyUuid;
beforeAll(() => {
  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
});

afterAll(() => {
  mockSpyUuid.mockRestore();
});

describe('DateInput', () => {
  const defaultRender = <DateInput name="date-input" />;

  // Snapshot Tests
  it('should render a default date input', () => {
    const wrapper = enzymeIntl.shallowWithIntl(defaultRender);
    const testComponent = wrapper.dive();
    expect(testComponent).toMatchSnapshot();
  });

  it('should render a date input with custom attributes', () => {
    const dateInput = <DateInput name="date-input" inputAttributes={{ id: 'terra-date-input' }} />;
    const wrapper = enzymeIntl.shallowWithIntl(dateInput);
    const testComponent = wrapper.dive();
    expect(testComponent).toMatchSnapshot();
  });

  it('should render a date input with a default date', () => {
    const dateInput = <DateInput name="date-input" value="2000-07-04" />;
    const wrapper = enzymeIntl.shallowWithIntl(dateInput);
    const testComponent = wrapper.dive();
    expect(testComponent).toMatchSnapshot();
  });

  it('should render a date input with onChange', () => {
    const dateInput = <DateInput name="date-input" onChange={() => { }} />;
    const wrapper = enzymeIntl.shallowWithIntl(dateInput);
    const testComponent = wrapper.dive();
    expect(testComponent).toMatchSnapshot();
  });

  it('should render a date input with onBlur', () => {
    const dateInput = <DateInput name="date-input" onBlur={() => { }} />;
    const wrapper = enzymeIntl.shallowWithIntl(dateInput);
    const testComponent = wrapper.dive();
    expect(testComponent).toMatchSnapshot();
  });

  it('should render a date input with onFocus', () => {
    const dateInput = <DateInput name="date-input" onFocus={() => { }} />;
    const wrapper = enzymeIntl.shallowWithIntl(dateInput);
    const testComponent = wrapper.dive();
    expect(testComponent).toMatchSnapshot();
  });

  it('should not have duplicate ids on the page when multiple date inputs are initialized', () => {
    const wrapper = enzymeIntl.renderWithIntl(
      <div>
        <DateInput name="date-input" />
        <DateInput name="date-input-2" />
        <DateInput name="date-input-3" />
      </div>,
    );

    expect(wrapper).toMatchSnapshot();
    delete window.ontouchstart;
  });

  it('should render a disabled time input', () => {
    const timeInput = <DateInput name="date-input" disabled />;
    const wrapper = enzymeIntl.shallowWithIntl(timeInput);
    const testComponent = wrapper.dive();
    expect(testComponent).toMatchSnapshot();
  });

  it('should validate the incrementDay helper method', () => {
    expect(DateInputUtil.incrementDay('11')).toEqual('12');
    expect(DateInputUtil.incrementDay('31')).toEqual('01');
    expect(DateInputUtil.incrementDay('0')).toEqual('01');
    expect(DateInputUtil.incrementDay('')).toEqual('01');
  });

  it('should validate the decrementDay helper method', () => {
    expect(DateInputUtil.decrementDay('11')).toEqual('10');
    expect(DateInputUtil.decrementDay('01')).toEqual('31');
    expect(DateInputUtil.decrementDay('0')).toEqual('31');
    expect(DateInputUtil.decrementDay('')).toEqual('31');
  });

  it('should validate the incrementYear helper method', () => {
    expect(DateInputUtil.incrementYear('1999')).toEqual('2000');
    expect(DateInputUtil.incrementYear('2100')).toEqual('1900');
    expect(DateInputUtil.incrementYear('')).toEqual('1900');
  });

  it('should validate the decrementYear helper method', () => {
    expect(DateInputUtil.decrementYear('1999')).toEqual('1998');
    expect(DateInputUtil.decrementYear('1900')).toEqual('2100');
    expect(DateInputUtil.decrementYear('')).toEqual('2100');
  });

  it('should validate the validNumericInput helper method', () => {
    expect(DateInputUtil.validNumericInput('1')).toEqual(true);
    expect(DateInputUtil.validNumericInput('0')).toEqual(true);
    expect(DateInputUtil.validNumericInput('')).toEqual(true);
    expect(DateInputUtil.validNumericInput('a')).toEqual(false);
    expect(DateInputUtil.validNumericInput('-')).toEqual(false);
  });

  it('should validate the splitMonth helper method', () => {
    expect(DateInputUtil.splitMonth('2000-07-04')).toEqual('07');
    expect(DateInputUtil.splitMonth('2000-7-04')).toEqual('');
    expect(DateInputUtil.splitMonth('2000-70-04')).toEqual('');
    expect(DateInputUtil.splitMonth('2000-00-04')).toEqual('');
    expect(DateInputUtil.splitMonth('2000-0-04')).toEqual('');
    expect(DateInputUtil.splitMonth('2000')).toEqual('');
    expect(DateInputUtil.splitMonth('2000-')).toEqual('');
    expect(DateInputUtil.splitMonth('2000--')).toEqual('');
    expect(DateInputUtil.splitMonth('aaaa-bb-cc')).toEqual('');
  });

  it('should validate the splitDay helper method', () => {
    expect(DateInputUtil.splitDay('2000-07-04')).toEqual('04');
    expect(DateInputUtil.splitDay('2000-07-4')).toEqual('4');
    expect(DateInputUtil.splitDay('2000-07-00')).toEqual('00');
    expect(DateInputUtil.splitDay('2000-07-0')).toEqual('0');
    expect(DateInputUtil.splitDay('2000-07-40')).toEqual('');
    expect(DateInputUtil.splitDay('2000-07')).toEqual('');
    expect(DateInputUtil.splitDay('2000-07-')).toEqual('');
    expect(DateInputUtil.splitDay('aaaa-bb-cc')).toEqual('');
  });

  it('should validate the splitYear helper method', () => {
    expect(DateInputUtil.splitYear('2000-07-04')).toEqual('2000');
    expect(DateInputUtil.splitYear('2000-7-04')).toEqual('2000');
    expect(DateInputUtil.splitYear('2000-70-04')).toEqual('2000');
    expect(DateInputUtil.splitYear('2')).toEqual('2');
    expect(DateInputUtil.splitYear('20')).toEqual('20');
    expect(DateInputUtil.splitYear('200')).toEqual('200');
    expect(DateInputUtil.splitYear('2000')).toEqual('2000');
    expect(DateInputUtil.splitYear('2000-')).toEqual('2000');
    expect(DateInputUtil.splitYear('2000--')).toEqual('2000');
    expect(DateInputUtil.splitYear('aaaa-bb-cc')).toEqual('');
  });

  it('should validate the acceptedDateValue helper method', () => {
    expect(DateInputUtil.acceptedDateValue('2000-07-04')).toBe(true);
    expect(DateInputUtil.acceptedDateValue('2001-02-31')).toBe(true);
    expect(DateInputUtil.acceptedDateValue('1234-11-01')).toBe(true);
    expect(DateInputUtil.acceptedDateValue('2001-07-04')).toBe(true);
    expect(DateInputUtil.acceptedDateValue('2211-11-11')).toBe(true);
    expect(DateInputUtil.acceptedDateValue('2020-10-31')).toBe(true);
    expect(DateInputUtil.acceptedDateValue('2021-01-31')).toBe(true);
    expect(DateInputUtil.acceptedDateValue('2000-02-29')).toBe(true);
    expect(DateInputUtil.acceptedDateValue('2001-02-29')).toBe(true);
    expect(DateInputUtil.acceptedDateValue('2002-02-29')).toBe(true);
    expect(DateInputUtil.acceptedDateValue('2003-02-29')).toBe(true);
    expect(DateInputUtil.acceptedDateValue('2004-02-29')).toBe(true);
    expect(DateInputUtil.acceptedDateValue('2008-02-29')).toBe(true);
    expect(DateInputUtil.acceptedDateValue('2012-02-29')).toBe(true);
    expect(DateInputUtil.acceptedDateValue('')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('1-2-3')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('01-2-3')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('01-02-3')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('2000-2-03')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('2000-02-3')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('2001-02-32')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('2001-ab-32')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('2001-02-cd')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('abcd-ef-gh')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('a5^d-$!-g&')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('----------')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('2001-02-300')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('20014-02-03')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('20014-2-03')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('2001-212-03')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('2001-212-3')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('2001-ab-321')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('2001-02-cd2')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('abcd-ef-gha')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('a5^d-$!-g&^')).toBe(false);
    expect(DateInputUtil.acceptedDateValue('-----------')).toBe(false);
  });

  it('should validate the computedDisplayFormat helper method', () => {
    expect(DateInputUtil.computedDisplayFormat('month-day-year', 'ar')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('month-day-year', 'de')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('month-day-year', 'en-AU')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('month-day-year', 'en-US')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('month-day-year', 'en')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('month-day-year', 'es-ES')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('month-day-year', 'es-US')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('month-day-year', 'es')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('month-day-year', 'fi')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('month-day-year', 'fr-FR')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('month-day-year', 'fr')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('month-day-year', 'nl-BE')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('month-day-year', 'nl')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('month-day-year', 'pt-BR')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('month-day-year', 'pt')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('month-day-year', 'sv-SE')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('month-day-year', 'sv')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('month-day-year', 'ru_RU')).toEqual('month-day-year');

    expect(DateInputUtil.computedDisplayFormat('day-month-year', 'ar')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('day-month-year', 'de')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('day-month-year', 'en-AU')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('day-month-year', 'en-US')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('day-month-year', 'en')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('day-month-year', 'es-ES')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('day-month-year', 'es-US')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('day-month-year', 'es')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('day-month-year', 'fi')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('day-month-year', 'fr-FR')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('day-month-year', 'fr')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('day-month-year', 'nl-BE')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('day-month-year', 'nl')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('day-month-year', 'pt-BR')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('day-month-year', 'pt')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('day-month-year', 'sv-SE')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('day-month-year', 'sv')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('day-month-year', 'ru-RU')).toEqual('day-month-year');

    expect(DateInputUtil.computedDisplayFormat('', 'ar')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('', 'de')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('', 'en-AU')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('', 'en-US')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('', 'en')).toEqual('month-day-year');
    expect(DateInputUtil.computedDisplayFormat('', 'es-ES')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('', 'es-US')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('', 'es')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('', 'fi')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('', 'fr-FR')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('', 'fr')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('', 'nl-BE')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('', 'nl')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('', 'pt-BR')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('', 'pt')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('', 'sv-SE')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('', 'sv')).toEqual('day-month-year');
    expect(DateInputUtil.computedDisplayFormat('', 'ru_RU')).toEqual('day-month-year');
  });

  it('correctly applies the theme context className', () => {
    const date = enzymeIntl.mountWithIntl(
      <ThemeContextProvider theme={{ className: 'clinical-lowlight-theme' }}>
        <DateInput name="date-input" value="2000-07-04" />
      </ThemeContextProvider>,
    );
    expect(date).toMatchSnapshot();
  });

  // computedDisplayFormat
});

describe('DateInputField', () => {
  it('correctly applies the theme context className', () => {
    const date = enzymeIntl.mountWithIntl(
      <ThemeContextProvider theme={{ className: 'clinical-lowlight-theme' }}>
        <DateInputField
          legend="Legend text"
          name="date-input-value"
          value="2000-07-04"
        />
      </ThemeContextProvider>,
    );
    expect(date).toMatchSnapshot();
  });
});
