/* eslint-disable class-methods-use-this */

import React from 'react';
import { Form, Field } from 'react-final-form';
import InputField from 'terra-form-input/lib/InputField';
import Button from 'terra-button';
import Spacer from 'terra-spacer';

const numericOnly = (value) => {
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, '');
  return onlyNums;
};

const enforcePhoneNumber = (value) => {
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 3) return onlyNums;
  if (onlyNums.length <= 7) return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`;

  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(
    6,
    10,
  )}`;
};

const required = value => (value ? undefined : 'Required');

export default class MainEntry extends React.Component {
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

  renderForm({ handleSubmit, pristine, invalid }) {
    return (
      <form
        onSubmit={handleSubmit}
      >
        <Field
          name="vacation_days"
          validate={required}
          parse={numericOnly}
        >
          {({ input, meta }) => (
            <InputField
              inputId="vacation-days"
              label="Vacation Days Remaining"
              error={meta.error}
              isInvalid={meta.submitFailed && !meta.valid}
              inputAttrs={{
                placeholder: '# of Vacation Days remaining',
                ...input,
              }}
              onChange={(e) => { input.onChange(e.target.value); }}
              value={input.value}
              required
            />
          )}
        </Field>
        <Field
          name="phone_number"
          validate={required}
          parse={enforcePhoneNumber}
        >
          {({ input, meta }) => (
            <InputField
              inputId="phone-number"
              label="Phone Number"
              error={meta.error}
              isInvalid={meta.submitFailed && !meta.valid}
              inputAttrs={{
                placeholder: '(###) ###-####',
                ...input,
              }}
              onChange={(e) => { input.onChange(e.target.value); }}
              value={input.value}
              required
            />
          )}
        </Field>
        <Button text="Submit" isDisabled={invalid || pristine} type={Button.Opts.Types.SUBMIT} />
      </form>
    );
  }

  render() {
    return (
      <Spacer marginBottom="small">
        <Form
          onSubmit={this.submitForm}
          render={this.renderForm}
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
