/* eslint-disable class-methods-use-this */

import React from 'react';
import { Form, Field } from 'react-final-form';
import TerraField from 'terra-form-field';
import Input from 'terra-form-input';
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
            <TerraField
              {...rest}
              label="Description"
              error={meta.error}
              isInvalid={!meta.valid}
              required
            >
              <Input
                {...input}
                placeholder="Description"
                onChange={(e) => { input.onChange(e.target.value); }}
                value={input.value}
              />
            </TerraField>
          )}
        </Field>
        <Field
          name="user_name"
          validate={validateUniqueUser}
        >
          {({ input, meta, ...rest }) => (
            <TerraField
              {...rest}
              label="User Name"
              error={meta.error}
              isInvalid={!meta.error}
              required
            >
              <Input
                {...input}
                placeholder="Description"
                onChange={(e) => { input.onChange(e.target.value); }}
                value={input.value}
              />
            </TerraField>
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
