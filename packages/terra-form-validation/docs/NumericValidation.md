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

With this, we have a pretty simple number type input with a basic validation tied to the `<Form>` component that checks to see whether or not we have a value for the input.

We also have our `<Field>`'s validation function defined and ready to be added to, with it only having a basic check to see if there is a value.

Because we have added to the `inputAttrs` prop  of `<InputField>` the value of `type: 'number'` this also means we have a bit of browser enforcement on the inputted value. Mainly that it has to be a number of some sort so it only accepts certain characters.

A thing of note is that even though we specified the input as a number type, it will still take some 'wrong' values and place them in the field but give them as `undefined`. Specifically the input will accept values such as `--1` or `2.0.32` but then when the validation functions run the value given to them will be `undefined`. With our code is currently setup that means we will just return a value of `Required` via the `<Form>`'s validation function.

The 2nd thing of note is that our validation function, `validateNumber`, will be given it's argument in the form of a string despite it being a number type input. This doesn't impact simple operators too much like `<` and `>` but it is information you should know for when your building custom validation functions.

With this in mind, we'll first start by giving a minimum and maximum to our value. For simplicity's sake lets go with a minimum of 10 and a maximum of 100.

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

Now for the more complicated validation which is the level of precision we want in our input. For the example let us say that we want 3 decimals worth of precision and we don't want to accept more than that. There are multiple ways of validating this but since our value is a string, we'll use string functions to validate.

We will split the given string on its `.` character, and then check to make sure the 2nd string we get from doing this has a length of 3 or less.

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

For the sake of the example lets try a different way of validating. Let us, instead of using string function to validate, convert the value given to us to a `Number` instead. With it being a number we can use the `Number` class function `toFixed` which allows us to automatically take a value to a given precision.

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
