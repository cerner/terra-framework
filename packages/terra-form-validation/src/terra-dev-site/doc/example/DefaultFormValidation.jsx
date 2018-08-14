/* eslint-disable class-methods-use-this */

import React from 'react';
import { Form, Field } from 'react-final-form';
import InputField from 'terra-form-input/lib/InputField';
import TextareaField from 'terra-form-textarea/lib/TextareaField';
import Button from 'terra-button';
import Spacer from 'terra-spacer';

const validateUniqueUser = async (name) => {
  const response = new Promise((resolve) => {
    if (name !== 'TerraUser') {
      return resolve('');
    }

    return resolve('Name is Unavailable');
  });

  await response;
  return response;
};

export default class MainEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.submitForm = this.submitForm.bind(this);
    this.renderForm = this.renderForm.bind(this);
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
          name="user_name"
          validate={validateUniqueUser}
        >
          {({ input, meta }) => (
            <InputField
              inputId="user-name"
              label="User Name"
              error={meta.error}
              isInvalid={meta.submitFailed && !meta.valid}
              required
              help="TerraUser is not available"
              inputAttrs={{
                placeholder: 'Description',
                ...input,
              }}
              onChange={(e) => { input.onChange(e.target.value); }}
              value={input.value}
            />
          )}
        </Field>
        <Field
          name="description"
        >
          {({ input, meta }) => (
            <TextareaField
              inputId="description-field"
              label="Description"
              error={meta.error}
              isInvalid={meta.submitFailed && !meta.valid}
              inputAttrs={{
                placeholder: 'Description',
                ...input,
              }}
              onChange={(e) => { input.onChange(e.target.value); }}
              value={input.value}
              required
            />
          )}
        </Field>
        <Button text="Submit" type={Button.Opts.Types.SUBMIT} />
        {this.state.submittedValues
          && (
          <div>
            <p>Form Submitted Successfully With</p>
            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>
          </div>
          )
        }
      </form>
    );
  }

  render() {
    return (
      <Spacer marginBottom="small">
        <Form
          onSubmit={this.submitForm}
          render={this.renderForm}
          initialValues={{ description: '' }}
          validate={(values) => {
            const errors = {};

            if (!values.description) {
              errors.description = 'Required';
            }

            if (!values.user_name) {
              errors.user_name = 'Required';
            }

            return errors;
          }}
        />
      </Spacer>
    );
  }
}
