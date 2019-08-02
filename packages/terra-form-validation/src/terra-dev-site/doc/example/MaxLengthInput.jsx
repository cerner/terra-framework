/* eslint-disable class-methods-use-this */

import React from 'react';
import { Form, Field } from 'react-final-form';
import InputField from 'terra-form-input/lib/InputField';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
import FormValidationUtil from '../../../FormValidationUtil';

const validateLength = (name) => {
  if (!FormValidationUtil.isUnderMaxLength(name, 8)) {
    return 'Name needs to be less than 9 characters long';
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
        noValidate
        onSubmit={handleSubmit}
      >
        <Field
          name="example"
          validate={validateLength}
        >
          {({ input, meta }) => (
            <InputField
              inputId="example"
              label="Example"
              error={meta.error}
              isInvalid={meta.error !== undefined}
              inputAttrs={{
                placeholder: 'Example',
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
          initialValues={{ example: '' }}
          validate={(values) => {
            const errors = {};

            if (!values.example) {
              errors.example = 'Required';
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
