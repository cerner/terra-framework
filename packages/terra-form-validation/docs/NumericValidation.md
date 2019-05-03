# Making a Numeric Input With Minimum, Maximum, and Precision Validations

Since this is a more in depth view of validation, we're going to just start with some provided code and add to it as needed.

```javascript
import React from 'react';
import { Form, Field } from 'react-final-form';
import InputField from 'terra-form-input/lib/InputField';
import Button from 'terra-button';
import Spacer from 'terra-spacer';

const validateNumber = (value) => {
  if (!value) { return undefined; }

  return undefined;
};

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(values) {
    this.setState({
      submittedValues: values,
    });
  }

  renderForm({ handleSubmit }) {
    return (
      <form
        onSubmit={handleSubmit}
      >
        <Field
          name="numExample"
          validate={validateNumber}
        >
          {({ input, meta }) => (
            <InputField
              inputId="numExample"
              label="Numeric Example"
              error={meta.error}
              isInvalid={meta.error !== undefined}
              inputAttrs={{
                type: 'number',
                ...input,
              }}
              onChange={(e) => { input.onChange(e.target.value); }}
              value={input.value}
              required
            />
          )}
        </Field>
        <Button text="Submit" type={Button.Opts.Types.SUBMIT} />
      </form>
    );
  }

  render() {
    return (
      <Spacer marginBottom="small">
        <Form
          onSubmit={this.submitForm}
          render={this.renderForm}
          initialValues={{ numExample: '' }}
          validate={(values) => {
            const errors = {};

            if (!values.numExample) {
              errors.numExample = 'Required';
            }

            return errors;
          }}
        />
        {this.state.submittedValues
          && (
          <div>
            <p>Form Submitted Successfully With</p>
            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>
          </div>
          )
        }
      </Spacer>
    );
  }
}
```

We have a simple number type input with validation, tied to the `<Form>` component, that checks whether we have a value for the input.

We also have our `<Field>`'s validation function defined and ready to be added to, with it only having a basic check to see if there is a value.

We have added browser enforcement on the inputted value by passing `type: 'number'` into `<Inputfield>`'s `inputAttrs`.

Note that specifying `type: 'number'` still allows negatives and decimal points, such as `--1` or `2.0.32`. These will be placed in the field as `undefined`. With our code, we will just return a value of `Required`, via the `<Form>`'s validation function, if values are undefined.

Second thing - our validation function, `validateNumber`, will be given a *string*, despite the input being of `type: 'number'`. This does not impact simple operators but is useful to know when building custom validation functions.

Let's start by giving a minimum and maximum to our value. For simplicity, set a minimum to 10 and a maximum to 100.

```javascript
const validateNumber = (value) => {
  if (!value) { return undefined; }
  if (value < 10) {
    return 'Value should not be less than 10.';
  }
  if (value > 100) {
    return 'Value should not be over 100.';
  }

  return undefined;
};
```

Now, let's check for precision. For this example, lets validate to the thousandth place (three decimal places). Since our value is a string, we'll use string functions to validate.

Use `.` as a delimiter and check for a length less than or equal to 3.

```javascript
const validateNumber = (value) => {
  ...
  const valueSplit = value.split('.');
  if (valueSplit.length === 2 && valueSplit[1].length > 3) {
    return 'Value has more than 3 decimal points';
  }

  return undefined;
};
```

This way of validating for precision has a few quirks with it, mainly that if we give it a value of `23.023000` it would fail the validation, because of the extra `0`s at the end despite this number effectively being the same as `23.023`.

Lets try a different way of validating. Convert the value a `Number` instead. This way we can use the `toFixed` function to automatically set precision, and use this as a comparison.

```javascript
const validateNumber = (value) => {
  ...
  const valueNum = Number(value);
  if (valueNum.toFixed(3) != valueNum) {
    return 'Value has more than 3 decimal points';
  }

  return undefined;
};
```

With this we compare the value given us to same value to a given precision. Which means if we are handed `45.4321`, we will compare it to `45.432`, which is not equal and will return the failure message. The quirk with this validation is that if you give it `23.023000` it will succeed because it will be compared to `23.023` and be found equal thus you probably will need to include something to shorten the String value in this case.

With this we have a function that we can add to validate a number based by having a minimum, maximum, and a certain level of precision required. In the same vein as the 'Max Length Input' example, we can use the `FormValidationUtil` to help control and reduce some of workflow.

```javascript
const validateNumber = (value) => {
  if (!FormValidationUtil.minValue(value, 10)) {
    return 'Value should not be less than 10.';
  }
  if (!FormValidationUtil.maxValue(value, 100)) {
    return 'Value should not be over 100.';
  }
  if (!FormValidationUtil.precisionCheck(value, 3)) {
    return 'Value has more than 3 decimal points';
  }

  return undefined;
};
```
