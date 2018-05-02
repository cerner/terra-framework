/* eslint-disable class-methods-use-this */

import React from 'react';
import { Form, Field } from 'react-final-form';
import InputField from 'terra-form-input/lib/InputField';
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
          name="description"
        >
          {({ input, meta, placeholder, ...rest }) => (
            <InputField
              {...rest}
              label="Description"
              error={meta.error}
              isInvalid={!meta.valid}
              inputAttrs={{
                placeholder: 'Description',
                required: true,
                ...input,
              }}
              onChange={(e) => { input.onChange(e.target.value); }}
              value={input.value}
              required
            />
          )}
        </Field>
        <Field
          name="user_name"
          validate={validateUniqueUser}
        >
          {({ input, meta, ...rest }) => (
            <InputField
              {...rest}
              label="User Name"
              error={meta.error}
              isInvalid={!meta.valid}
              required
              help="TerraUser is not available"
              inputAttrs={{
                placeholder: 'Description',
                required: true,
                ...input,
              }}
              onChange={(e) => { input.onChange(e.target.value); }}
              value={input.value}
            />
          )}
        </Field>
        <Button text="Submit" isDisabled={invalid || pristine} type={Button.Opts.Types.SUBMIT} />
      </form>
    );
  }

  render() {
    return (
      <Spacer marginTop="small">
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
        {this.state.submittedValues &&
          <div>
            <p>Form Submitted Successfully With</p>
            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>
          </div>
        }
      </Spacer>
    );
  }
}
