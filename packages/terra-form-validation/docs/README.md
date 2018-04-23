# Terra Form Validation

To write form validations for your component, Terra recommends using [react-final-form](https://github.com/final-form/react-final-form). This package contains several different hooks and functionality for performing validations at various levels which include:

- Validating onChange
- Validating onSubmit
- Validation synchronously (Such as for unit user name implementations)
- Restricting inputs to a particular format.

For other functionality that is provided, consult the documentation provided by *react-final-form*.

## Getting Started

Import Form and Field from react-final-form, and build your form like the following, where Form wraps the entire form, and Field is used for each individual import on the form.

```jsx

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

  render() {
    return (
        <Form
          onSubmit={this.submitForm}
          render={this.renderForm}
        >
        </Form>
    );
  }

  renderForm({ handleSubmit, reset, submitting, pristine, values, invalid }) {
    return (
      <form 
        onSubmit={handleSubmit}
      >
        <h1>Hello People!</h1>
        <Field
          name="profile"
          type="text"
          validate={required}
        />
        <Button text="Submit" isDisabled={invalid || pristine} type={Button.Opts.Types.SUBMIT}/>
      </form>
    );
  }
}

```

When initialize the form, ensure that onSubmit receives the value of handleSubmit for it's render method. In addition, all fields should have a validate prop which returns an error message for that given input. A simple validation function could look like the following. Finally, the formrender function contains attributes such as invalid that allow for you to enable and disable the submission button. All you need to do is pass in the attribute you wish to check in order to see if the button should be enabled or not.

```jsx
const required = value => (value ? undefined : 'Required')
```

As long as a non empty message is returned from the function, that indicates that the input does not have any errors associated to it.

## Integration with Terra components
To use terra form components with react-final-form, all that needs to be handled is to pass the appropriate InputField, TextareaField, or custom build Field as children to a react-final-form Field component.

```jsx
```

## Example Terra Form Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import I18n from 'terra-i18n';
import { Form, Field } from 'react-final-form';
import TerraField from 'terra-form-field';

const validateUniqueUser = async (name) => {
  let response = new Promise((resolve, reject) => {
    if (name !== 'Terra User') {
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
          name="profile"
          type="text"
          validate={required}
        />
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

```

