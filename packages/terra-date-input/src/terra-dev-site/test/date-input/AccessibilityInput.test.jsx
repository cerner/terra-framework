import React, { useState } from 'react';

import DateInput from 'terra-date-input/lib/DateInput';
import Checkbox from 'terra-form-checkbox';
import InputField from 'terra-form-input/lib/InputField';
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';
import RadioFieldGenerator from './common/_RadioFieldGenerator';

const AccessibilityInputTest = () => {
  const [value, setValue] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [mutex, setMutex] = useState('optional');
  const [displayFormat, setDisplayFormat] = useState('month-day-year');
  const [a11yLabel, setA11yLabel] = useState('Anniversary');

  return (
    <>
      <h1 aria-hidden>Component Under Test</h1>
      <DateInput
        a11yLabel={a11yLabel}
        name="date-of-birth"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        isInvalid={isInvalid}
        displayFormat={displayFormat}
        disabled={disabled}
        isIncomplete={mutex.includes('incomplete')}
        required={mutex.includes('required')}
      />

      <div aria-hidden="true">
        <h1>Test Settings</h1>
        <CheckboxField legend="Props">
          <Checkbox id="disabled" labelText="disabled" onChange={() => setDisabled(val => !val)} />
          <Checkbox id="isInvalid" labelText="isInvalid" onChange={() => setIsInvalid(val => !val)} />
        </CheckboxField>
        <InputField type="text" label="A11YLabel:" inputId="a11yLabel" value={a11yLabel} onChange={(e) => setA11yLabel(e.currentTarget.value)} />
        <RadioFieldGenerator
          fieldLegend="Mutually Exclusive"
          name="mutex"
          options={[
            'optional',
            'required',
            'required-incomplete',
          ]}
          onChange={(e) => setMutex(e.currentTarget.value)}
        />
        <RadioFieldGenerator
          fieldLegend="Format"
          name="format"
          options={[
            'month-day-year',
            'day-month-year',
          ]}
          onChange={(e) => setDisplayFormat(e.currentTarget.value)}
        />
      </div>
    </>
  );
};

export default AccessibilityInputTest;
