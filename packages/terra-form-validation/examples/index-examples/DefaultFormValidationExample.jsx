import React from 'react';
import ReactDOM from 'react-dom';
import I18n from 'terra-i18n';
import { Form, Field } from 'react-final-form';
import TerraField from 'terra-form-field';
import Input from 'terra-form-input';

const validateUniqueUser = async (name) => {
  let response = new Promise((resolve, reject) => {
    if (name !== 'LaCombe') {
      return resolve('');
    } else {
      return resolve('Name is Unavailable');
    }
  });

  await response;
  return response;
}

const required = value => (value ? undefined : 'Required')

export default class MainEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault
    alert('Form Submitted');
  }

  renderForm({ handleSubmit, reset, submitting, pristine, values, invalid }) {
    return (
      <form 
        onSubmit={handleSubmit}
      >
        <h1>Hello People!</h1>
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
                onChange={(e) => {input.onChange(e.target.value);}}
                value={input.value}
              />
            </TerraField>
          )}
        </Field>
        <Field
          name="user_name"
          validate={validateUniqueUser}
        >
          {({ input, meta,  ...rest }) => (
            <TerraField
              {...rest}
              label="User Name"
              error={meta.error}
              isInvalid={!meta.valid}
              required
            >
              <Input
                {...input}
                placeholder="Description"
                onChange={(e) => {input.onChange(e.target.value);}}
                value={input.value}
              />
            </TerraField>
          )}
        </Field>
        <button type="submit" disabled={invalid || pristine}>
          Submit
        </button>
      </form>
    );
  }

  render() {
    return (
      <Form
        style={{marginLeft: '1.428'}}
        onSubmit={this.submitForm}
        render={this.renderForm}
        initialValues={{description: ''}}
        validate={(values) => {
          const errors = {};

          if (!values.description) {
            errors.description = "Required"
          }

          if (!values.user_name) {
            errors.user_name = "Required"
          }

          return errors;
        }}
        >
      </Form>
    );
  }
}
