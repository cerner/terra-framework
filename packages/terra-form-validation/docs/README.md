# Form Validation

Terra recommends using [react-final-form](https://github.com/final-form/react-final-form) to write form validations for components. This package contains several different hooks and functionality for performing validations at various levels which include:

- Validating onChange
- Validating onSubmit
- Validating Synchronously (Such as for unique user name implementations)
- Restricting inputs to a particular format.

For other functionality that is provided, consult [react-final-form documentation](https://github.com/final-form/react-final-form).

## Integration with Terra

To easily integrate react-final-form with Terra form elements, we have created individual Field components inside of terra-form-input (InputField), terra-form-textarea (TextareaField), terra-form-radio (RadioField) and terra-form-checkbox (CheckboxField). For integrating with terra-form-select components, a Select element can be combined with a terra-form-field component. There are future enhancements to add a Field component to terra-form-select.

For all of these field components, the isInvalid and error props of the Fields will be set from the data coming from react-final-form.

## Usage

react-final-form consists of a wrapping Form element that houses the validation logic, and Field elements that validate individual inputs of a given form.

To start, you need to import the Form component from react-final-form, and set the onSubmit and render props of the Form. onSubmit is a function with a single argument that is an object of the submitted form values, and the render function is essentially a function that returns a native form rendered in react. The render function has several different props provided by react-final-form that can be used for creating your forms (see [form render props](https://github.com/final-form/react-final-form#formrenderprops) for all possible options). One thing to note is that inside the render function, handleSubmit needs to be passed into the native form component as well.

When rendering individual fields inside the form, there are a few things that need to be done. The first is to create a Field component using the Field object from react-final-form, and setting the name, initial value, and validate props. Then inside the Field children, render a function with the arguments input and meta. The input prop contains information specific to the event such as value and name, and meta includes information related to field errors, submission state, validity status. You can view more of the provided attributes [here](https://github.com/final-form/react-final-form#fieldrenderprops). For immediate use, make sure that the function returns a form element with the onChange, value, and other input attributes set appropriately.

To get a visual on what the implementation looks like, see below:

```jsx
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

  renderForm({ handleSubmit, pristine, invalid }) {
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
              isInvalid={meta.submitFailed}
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
              isInvalid={meta.submitFailed}
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
        {this.state.submittedValues &&
          <div>
            <p>Form Submitted Successfully With</p>
            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>
          </div>
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
        />
      </Spacer>
    );
  }
}
```

See links in the sidebar for working with additional validation events and writing custom validations.
