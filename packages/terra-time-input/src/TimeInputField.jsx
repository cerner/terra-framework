import React from 'react';
import Field from 'terra-form-field';
import TimeInput from './TimeInput';

function TimeInputField(props) {
  const {
    label,
    help,
    error,
    ...customProps
  } = props;
  return (
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
  );
}

export default TimeInputField;
