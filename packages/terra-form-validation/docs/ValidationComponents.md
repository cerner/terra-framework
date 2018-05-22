# Component Setup

## InputFields and TextareaFields

Setting up InputFields and TextareaFields is very simple. Encapsulate the desired field inside of a react-final-form Field component like down below. Ensure that the render function contains input and meta in it's props hash, and that the appropriate elements from the meta prop is passed into error and isInvalid.

### Example

```jsx
import React from 'react';
import { Form, Field } from react-final-form;
import TextareaField from 'terra-form-textarea/lib/TextareaField';

<Field
  name="description"
>
  {({ input, meta }) => (
    <TextareaField
      inputId="description-field"
      label="Description"
      error={meta.error}
      isInvalid={!meta.valid}
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
```

## CheckboxField and RadioFields

For CheckboxField and RadioField, it's recommended to use the field component provided by terra-form-checkbox and terra-form-radio. They contain props for rendering the error message in a consistent manner.

In the Form render function, ensure that you have the errors prop set in the prop hash. Then set the error and isInvalid states based on the information from that hash.

For each individual Radio or Checkbox, encapsulate that component inside of a react-final-form Field element, using the same name and validate function for each control you wish for the field to contain. **Note:** For having checkboxes that have multiple values, be sure to attach the [] to the name of the Field.

### Examples

**RadioField**

```jsx
import React from 'react';
import { Form, Field } from 'react-final-form';
import Radio from 'terra-form-radio';
import RadioField from 'terra-form-radio/lib/RadioField';

renderForm({ handleSubmit, errors }) {
  return (
    <form
      onSubmit={handleSubmit}
    >
      <RadioField
        legend="Which kind of meal would you like?"
        isInvalid={errors.meal !== undefined}
        error={errors.meal}
      >
        <Field
          name="meal"
          type="radio"
          value="chicken"
          validate={required}
          component={({ input }) => (
            <Radio
              inputAttrs={{ ...input }}
              labelText="Chicken"
              id={input.id}
              name={input.name}
              checked={!!input.checked}
              onChange={input.onChange}
              value={input.value}
            />
          )}
        />
        <Field
          name="meal"
          type="radio"
          value="vegetarian"
          validate={required}
          component={({ input }) => (
            <Radio
              inputAttrs={{ ...input }}
              labelText="Vegetarian"
              id={input.id}
              name={input.name}
              checked={!!input.checked}
              onChange={input.onChange}
              value={input.value}
            />
          )}
        />
        <Field
          name="meal"
          type="radio"
          value="fish"
          validate={required}
          component={({ input }) => (
            <Radio
              inputAttrs={{ ...input }}
              labelText="Fish"
              id={input.id}
              name={input.name}
              checked={!!input.checked}
              onChange={input.onChange}
              value={input.value}
            />
          )}
        />
      </RadioField>
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
```
**CheckboxField**

```jsx
import React from 'react';
import { Form, Field } from 'react-final-form';
import Checkbox from 'terra-form-checkbox';
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';

renderForm({ handleSubmit, errors }) {
  return (
    <form
      onSubmit={handleSubmit}
    >
      <CheckboxField
        legend="What are all the conference tracks you plan on attending?"
        error={errors.tracks}
        isInvalid={errors.tracks !== undefined}
      >
        <Field
          name="tracks[]"
          type="checkbox"
          value="developer"
          validate={required}
          component={({ input }) => (
            <Checkbox
              inputAttrs={{ ...input }}
              labelText="Developer"
              id={input.id}
              name={input.name}
              checked={!!input.checked}
              onChange={input.onChange}
              value={input.value}
            />
          )}
        />
        <Field
          name="tracks[]"
          type="checkbox"
          value="designer"
          validate={required}
          component={({ input }) => (
            <Checkbox
              inputAttrs={{ ...input }}
              labelText="Designer"
              id={input.id}
              name={input.name}
              checked={!!input.checked}
              onChange={input.onChange}
              value={input.value}
            />
          )}
        />
        <Field
          name="tracks[]"
          type="checkbox"
          value="soft_skills"
          validate={required}
          component={({ input }) => (
            <Checkbox
              inputAttrs={{ ...input }}
              labelText="Soft skills"
              id={input.id}
              name={input.name}
              checked={!!input.checked}
              onChange={input.onChange}
              value={input.value}
            />
          )}
        />
      </CheckboxField>
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
```
