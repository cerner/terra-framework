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
        noValidate
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

```diff
const validateNumber = (value) => {
  if (!value) { return undefined; }
+ var numericValue = Number(value);
+ if (numericValue < 10) {
+   return 'Value should not be less than 10.';
+ }
+ if (numericValue > 100) {
+   return 'Value should not be over 100.';
+ }

  return undefined;
};
```

Now, let's check for precision. For this example, lets validate to the thousandth place (three decimal places). Since our value is a string, we'll use string functions to validate.

Use `.` as a delimiter and check for a length less than or equal to 3.

```diff
const validateNumber = (value) => {
  ...
+ const valueSplit = value.split('.');
+ if (valueSplit.length === 2 && valueSplit[1].length > 3) {
+   return 'Value has more than 3 decimal points';
+ }

  return undefined;
};
```

This validation has a quirk. If the input contains extra `0`s, like `23.0230000`, validation will fail.

Let's try a different way of validating. Using the `Number` converted value instead, we can use the `toFixed` function to automatically set precision, and use this as a comparison.

```diff
const validateNumber = (value) => {
  if (!value) { return undefined; }
  var numericValue = Number(value);
  ...
- const valueSplit = value.split('.');
- if (valueSplit.length === 2 && valueSplit[1].length > 3) {
+ if (numericValue.toFixed(3) != numericValue) {
    return 'Value has more than 3 decimal points';
  }

  return undefined;
};
```

This validation has the opposite quirk. If the input contains extra `0`s, like `23.0230000`, validation will succeed.

With this we have a function that we can add to validate a number based by having a minimum, maximum, and a certain level of precision required. In the same vein as the 'Max Length Input' example, we can use the `FormValidationUtil` to help control and reduce some of workflow.

```diff
const validateNumber = (value) => {
   if (!value) { return undefined; }
-  var numericValue = Number(value);
-  if (numericValue < 10) {
+  if (!FormValidationUtil.isOverMinValue(value, 10)) {
    return 'Value should not be less than 10.';
  }
-  if (numericValue > 100) {
+  if (!FormValidationUtil.isUnderMaxValue(value, 100)) {
    return 'Value should not be over 100.';
  }
- if (numericValue.toFixed(3) != numericValue) {
+ if (!FormValidationUtil.isPrecise(value, 3)) {
    return 'Value has more than 3 decimal points';
  }

  return undefined;
};
```

Note: The `FormValidationUtil.precisionCheck` function uses the method where we split the `String` value to check precision.
