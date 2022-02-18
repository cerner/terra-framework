import React, { useState } from 'react';

import DateInputField from 'terra-date-input/lib/DateInputField';
import DateInput from 'terra-date-input/lib/DateInput';
import Checkbox from 'terra-form-checkbox';
import Radio from 'terra-form-radio';
import RadioField from 'terra-form-radio/lib/RadioField';
import InputField from 'terra-form-input/lib/InputField';
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';

const Accessibility = () => {
  const [value, setValue] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [mutex, setMutex] = useState('optional');
  const [displayFormat, setDisplayFormat] = useState('month-day-year');
  const [help, setHelp] = useState('Helpful text.');
  const [error, setError] = useState('Something went wrong.');
  const [showDateInput, setShowDateInput] = useState(true);
  const [showDateInputField, setShowDateInputField] = useState(true);

  function handleMutexChange(e) {
    setMutex(e.currentTarget.value);
  }

  return (
    <>
      <div
        id="dateInputFieldContainer"
        hidden={!showDateInputField}
      >
        <h1 aria-hidden>DateInputField</h1>
        <DateInputField
          legend="Date of birth"
          name="date-of-birth-field"
          value={value}
          onChange={(event, dateString) => setValue(dateString)}
          error={error}
          help={help}
          isInvalid={isInvalid}
          disabled={disabled}
          displayFormat={displayFormat}
          isIncomplete={mutex.includes('incomplete')}
          required={mutex.includes('required')}
        />
      </div>
      <div
        id="dateInputContainer"
        hidden={!showDateInput}
      >
        <h1 aria-hidden>DateInput</h1>
        <DateInput
          name="date-of-birth"
          value={value}
          onChange={(event, dateString) => setValue(dateString)}
          isInvalid={isInvalid}
          disabled={disabled}
          isIncomplete={mutex.includes('incomplete')}
          required={mutex.includes('required')}
          hidden={!showDateInput}
        />
      </div>

      <hr role="presentation" />

      <div id="settings" aria-hidden>
        <h1>Settings</h1>

        <CheckboxField legend="Props">
          <Checkbox id="disabled" labelText="disabled" onChange={() => setDisabled(val => !val)} />
          <Checkbox id="isInvalid" labelText="isInvalid" onChange={() => setIsInvalid(val => !val)} />
        </CheckboxField>

        <InputField type="text" label="Error Message:" inputId="error" placeholder="Message to show when invalid" defaultValue={error} onInput={(e) => setError(e.currentTarget.value)} />
        <InputField type="text" label="Help Message:" inputId="help" placeholder="Message to provide more detailed help" defaultValue={help} onInput={(e) => setHelp(e.currentTarget.value)} />

        <RadioField legend="Mutually Exclusive">
          <Radio
            name="mutex"
            id="optional"
            labelText="optional"
            value="optional"
            onChange={handleMutexChange}
            defaultChecked
          />
          <Radio
            name="mutex"
            id="required"
            labelText="required"
            value="required"
            onChange={handleMutexChange}
          />

          <Radio
            name="mutex"
            id="required-incomplete"
            labelText="required &amp; incomplete"
            value="required-incomplete"
            onChange={handleMutexChange}
          />
        </RadioField>

        <RadioField legend="Format">
          <Radio
            name="format"
            id="month-day-year"
            labelText="month-day-year"
            value="month-day-year"
            defaultChecked
            onChange={(e) => setDisplayFormat(e.currentTarget.value)}
          />

          <Radio
            name="format"
            id="day-month-year"
            labelText="day-month-year"
            value="day-month-year"
            onChange={(e) => setDisplayFormat(e.currentTarget.value)}
          />
        </RadioField>

        <CheckboxField legend="Show/Hide">
          <Checkbox id="showField" labelText="Show DateInputField" defaultChecked onChange={(e) => setShowDateInputField(e.currentTarget.checked)} />
          <Checkbox id="showInput" labelText="Show DateInput" defaultChecked onChange={(e) => setShowDateInput(e.currentTarget.checked)} />
        </CheckboxField>
      </div>
    </>
  );
};

export default Accessibility;
