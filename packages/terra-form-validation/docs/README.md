# Form Validation

Terra recommends using [react-final-form](https://github.com/final-form/react-final-form) to write from validations for components. This package contains several different hooks and functionality for performing validations at various levels which include:

- Validating onChange
- Validating onSubmit
- Validating Synchronously (Such as for unique user name implementations)
- Restricting inputs to a particular format.

For other functionality that is provided, consult [react-final-form documentation](https://github.com/final-form/react-final-form).

Usage

```jsx
import React from 'react';
import { Form, Field } from 'react-final-form';
import InputField from 'terra-form-input/lib/InputField';
import Checkbox from 'terra-form-checkbox';
import Radio from 'terra-form-radio';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
import Text from 'terra-text';
import Select from 'terra-form-select';

const required = value => (value && value.length > 0 ? undefined : 'Required');

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

  renderForm({ handleSubmit }) {
    return (
      <form
        onSubmit={handleSubmit}
      >
        <Field
          name="description"
          validate={required}
        >
          {({ input, meta, placeholder, ...rest }) => (
            <InputField
              {...rest}
              inputId="description"
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
```
