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

A thing of note is that our validation function, `validateNumber`, will be given it's argument in the form of a string despite it being a number type input. This doesn't impact simple operators too much like `<` and `>` but it is information you should know for when your building custom validation functions.

The 2nd thing of note is that even though we specified the input as a number type, it will still take some 'wrong' values and place them in the field but give them as `undefined`. Specifically the input will accept values such as `--1` or `2.0.32` but then when the validation functions run the value given to them will be `undefined`. With our code is currently setup that means we will just return a value of `Required` via the `<Form>`'s validation function.

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

This way of validating for precision has a few quirks with it, mainly that if we give it a value of `23.023000` it would fail the validation, because of the extra `0`s at the end.
