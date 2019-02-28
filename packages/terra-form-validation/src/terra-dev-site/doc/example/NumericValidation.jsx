/* eslint-disable class-methods-use-this */

import React from 'react';
import { Form, Field } from 'react-final-form';
import InputField from 'terra-form-input/lib/InputField';
import Button from 'terra-button';
import Spacer from 'terra-spacer';

const validateNumber = (value) => {
  if (!value) { return undefined; }
  if (value < 10) {
    return 'Value should not be less than 10.';
  }
  if (value > 100) {
    return 'Value should not be over 100.';
  }
  const valueSplit = value.split('.');
  if (valueSplit.length === 2 && valueSplit[1].length > 3) {
    return 'Value has more than 3 decimal points';
  }

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
