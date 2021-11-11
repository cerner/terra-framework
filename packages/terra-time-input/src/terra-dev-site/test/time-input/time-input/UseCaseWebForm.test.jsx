import React, { useEffect, useState } from 'react';
import Field from 'terra-form-field';
import Button from 'terra-button';
import TimeInput from '../../../../TimeInput';
import TimeUtil from '../../../../TimeUtil';

const FieldExamples = () => {
  const label = 'Time of birth';
  const label2 = 'Time of death';
  const variant = TimeUtil.FORMAT_12_HOUR;
  const initialValue = '09:22:59';

  const [mask, setMask] = useState('');
  const [help, setHelp] = useState('');
  const [textValue, setTextValue] = useState(undefined);
  const [error, setError] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [debug, setDebug] = useState(false);
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setHelp(`(${mask}) Enter the time the baby was born`);
    if (isInvalid && textValue) {
      setError(`${label2} cannot be ${textValue}`);
    } else {
      setError(`${label2} is not valid`);
    }
  }, [mask, help, textValue, error, isInvalid]);

  const toggleIsInvalid = () => {
    setIsInvalid(!isInvalid);
  };

  const toggleDebugInfo = () => {
    setDebug(!debug);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h1>TimeInput</h1>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <p>This input&apos;s label is <em>Time of birth</em>.</p>
      <TimeInput
        variant={variant}
        name="time-of-birth"
        a11yLabel={label}
        showSeconds
        isInvalid={isInvalid}
      />
      <h1>TimeInput used a in Field</h1>
      <Field
        label={label2}
        htmlFor="death-hour"
        help={help}
        error={error}
        isInvalid={isInvalid}
      >
        <TimeInput
          hourAttributes={{ id: 'death-hour' }}
          variant={variant}
          name="time-of-death"
          a11yLabel={label2}
          showSeconds
          maskCallback={setMask}
          onChange={handleChange}
          onTextValueChange={setTextValue}
          isInvalid={isInvalid}
          value={initialValue}
        />
      </Field>
      <Button text="Toggle Invalid State" variant="emphasis" onClick={toggleIsInvalid} />
      {debug && (
        <>
          <p>{`Initial value: ${initialValue}`}</p>
          <p>{`Changed value: ${value}`}</p>
          <p>{`Text value: ${textValue}`}</p>
        </>
      )}
      <Button text="Toggle Debug Info" variant="de-emphasis" onClick={toggleDebugInfo} />
    </>
  );
};

export default FieldExamples;
