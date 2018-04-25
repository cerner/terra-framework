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
          name="user_name"
          validate={validateUniqueUser}
        >
          {({ input, meta, ...rest }) => (
            <TerraField
              {...rest}
              label="User Name"
              error={meta.error}
              help="TerraUser is unavailable. Use this name to test async"
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
          validateOnBlur
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
