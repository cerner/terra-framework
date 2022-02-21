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
  const [isLegendHidden, setIsLegendHidden] = useState(false);
  const [mutex, setMutex] = useState('optional');
  const [displayFormat, setDisplayFormat] = useState('month-day-year');
  const [help, setHelp] = useState('Helpful text.');
  const [error, setError] = useState('Something went wrong.');
  const [showDateInput, setShowDateInput] = useState(true);
  const [showDateInputField, setShowDateInputField] = useState(true);

  /**
   * Use this generator to pump out tedious RadioField + Radios.
   * @param {string} legend The text of the legend tag.
   * @param {string} name The name of every Radio
   * @param {object} options A list of strings to serve as the key, id, labelText, and value of every Radio.
   * @param {function} onChange The handler you want called for every Radio's `change` event.
   * @returns A component like <RadioField …><Radio …>, … </RadioField>
   */
  function generateRadioField(legend, name, options, onChange) {
    return (
      <RadioField legend={legend}>
        {options.map((opt, index) => (
          <Radio
            // https://reactjs.org/docs/lists-and-keys.html#keys
            key={opt}
            name={name}
            id={opt}
            defaultChecked={index === 0}
            labelText={opt}
            value={opt}
            onChange={onChange}
          />
        ))}
      </RadioField>
    );
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
          isLegendHidden={isLegendHidden}
          disabled={disabled}
          displayFormat={displayFormat}
          isIncomplete={mutex.includes('incomplete')}
          required={mutex.includes('required')}
          showOptional={mutex.includes('showOptional')}
          hideRequired={mutex.includes('hideRequired')}
        />
      </div>
      <div
        id="dateInputContainer"
        hidden={!showDateInput}
      >
        <h1 aria-hidden>DateInput</h1>
        <DateInput
          a11yLabel="Anniversary"
          name="date-of-birth"
          value={value}
          onChange={(event, dateString) => setValue(dateString)}
          isInvalid={isInvalid}
          displayFormat={displayFormat}
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
          <Checkbox id="isLegendHidden" labelText="isLegendHidden" onChange={() => setIsLegendHidden(val => !val)} />
        </CheckboxField>

        <InputField type="text" label="Error Message:" inputId="error" placeholder="Message to show when invalid" defaultValue={error} onInput={(e) => setError(e.currentTarget.value)} />
        <InputField type="text" label="Help Message:" inputId="help" placeholder="Message to provide more detailed help" defaultValue={help} onInput={(e) => setHelp(e.currentTarget.value)} />

        {generateRadioField('Mutually Exclusive', 'mutex', [
          'optional',
          'optional-showOptional',
          'required',
          'required-hideRequired',
          'required-incomplete',
          'required-incomplete-hideRequired',
        ], (e) => setMutex(e.currentTarget.value))}

        {generateRadioField('Format', 'format', [
          'month-day-year',
          'day-month-year',
        ], (e) => setDisplayFormat(e.currentTarget.value))}

        <CheckboxField legend="Show/Hide">
          <Checkbox id="showField" labelText="Show DateInputField" defaultChecked onChange={(e) => setShowDateInputField(e.currentTarget.checked)} />
          <Checkbox id="showInput" labelText="Show DateInput" defaultChecked onChange={(e) => setShowDateInput(e.currentTarget.checked)} />
        </CheckboxField>
      </div>
    </>
  );
};

export default Accessibility;
