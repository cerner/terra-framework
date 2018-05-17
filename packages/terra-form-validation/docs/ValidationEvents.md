# Validation Events

## Dynamic Validation

The default behavior of *react-final-form* is to dynamically validate, meaning it validates the content while the user is interacting with the form, and when a form loads. To use this behavior, simply use the error key of the meta data passed to an individual form component, and pass it to the error prop of either the InputField or TextareaField, like in the example below.

```jsx
import React from 'react';
import { Field } from 'react-final-form';
import InputField from 'terra-form-input/lib/InputField';

  <Field
    name="description"
  >
    {({ input, meta, placeholder, ...rest }) => (
      <InputField
        {...rest}
        label="Description"
        error={meta.error}
        isInvalid={!meta.valid}
        required
        onChange={(e) => {input.onChange(e.target.value);}}
        value={input.value}
        inputAttrs={{
          type: 'text',
          ...input,
        }}
      />
    )}
  </Field>
```

## Validation on submit

Validating on submit is easy as well. In addition to meta.error, the meta.submitFailed boolean value can be used to identify when a form submission did not succeed.

```jsx
import React from 'react';
import { Field } from 'react-final-form';
import InputField from 'terra-form-input/lib/InputField';

<Field
  name="description"
>
  {({ input, meta, placeholder, ...rest }) => (
    <InputField
      {...rest}
      label="Description"
      error={meta.error}
      isInvalid={meta.submitFailed && meta.error !== undefined}
      required
      onChange={(e) => {input.onChange(e.target.value);}}
      value={input.value}
      inputAttrs={{
        type: 'text',
        ...input,
      }}
    />
  )}
</Field>
```

## Disable form submit for an invalid form

The form render function contains attributes such as invalid (the form has errors on it) and pristine (the form has not been touched yet by the user) that allow for you to enable and disable the submission button. All you need to do is pass in the attribute you wish to check in order to see if the button should be enabled or not.

Example

```jsx
import { Form, Field } from 'react-final-form';
import InputField from 'terra-form-input/lib/InputField';

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
          validate={required}>
          {({ input, meta, placeholder, ...rest }) => (
            <InputField
              {...rest}
              label="Profile"
              error={meta.error}
              isInvalid={meta.submitFailed && meta.error}
              required
              onChange={(e) => {input.onChange(e.target.value);}}
              value={input.value}
              inputAttrs={{
                type: 'text',
                ...input,
              }}
            />
          )}
        </Field>
        <Button text="Submit" isDisabled={invalid || pristine} type={Button.Opts.Types.SUBMIT}/>
      </form>
    );
  }

```

Consult [react-final-form](https://github.com/final-form/react-final-form) for further functionality that can be used.
