import React, { useState } from 'react';

import DateInputField from 'terra-date-input/lib/DateInputField';
import Checkbox from 'terra-form-checkbox';
import InputField from 'terra-form-input/lib/InputField';
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';
import RadioFieldGenerator from './common/_RadioFieldGenerator';

const AccessibilityFieldTest = () => {
  const [value, setValue] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isLegendHidden, setIsLegendHidden] = useState(false);
  const [mutex, setMutex] = useState('optional');
  const [displayFormat, setDisplayFormat] = useState('month-day-year');
  const [help, setHelp] = useState('Helpful text.');
  const [error, setError] = useState('Something went wrong.');
  const [legend, setLegend] = useState('Date of birth');

  return (
    <>
      <h1 aria-hidden>Component Under Test</h1>
      <DateInputField
        legend={legend}
        name="date-of-birth-field"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        error={error}
        help={help}
        isInvalid={isInvalid}
        isLegendHidden={isLegendHidden}
        disabled={disabled}
        displayFormat={displayFormat}
        isIncomplete={mutex.includes('incomplete')}
        required={mutex.includes('required')}
        showOptional={mutex.includes('showOptional')}
        hideRequired={mutex.includes('hideRequired')}
      />

      <div aria-hidden="true">
        <h1>Test Settings</h1>
        <CheckboxField legend="Props">
          <Checkbox id="disabled" labelText="disabled" onChange={() => setDisabled(val => !val)} />
          <Checkbox id="isInvalid" labelText="isInvalid" onChange={() => setIsInvalid(val => !val)} />
          <Checkbox id="isLegendHidden" labelText="isLegendHidden" onChange={() => setIsLegendHidden(val => !val)} />
        </CheckboxField>
        <InputField type="text" label="Legend:" inputId="legend" value={legend} onChange={(e) => setLegend(e.currentTarget.value)} />
        <InputField type="text" label="Error Message:" inputId="error" value={error} placeholder="Message to show when invalid" onChange={(e) => setError(e.currentTarget.value)} />
        <InputField type="text" label="Help Message:" inputId="help" value={help} placeholder="Message to provide more detailed help" onChange={(e) => setHelp(e.currentTarget.value)} />
        <RadioFieldGenerator
          fieldLegend="Mutually Exclusive"
          name="mutex"
          options={[
            'optional',
            'optional-showOptional',
            'required',
            'required-hideRequired',
            'required-incomplete',
            'required-incomplete-hideRequired',
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

export default AccessibilityFieldTest;
