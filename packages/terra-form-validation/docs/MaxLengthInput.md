# Making an Input With a Maximum Length

This is a step-by-step guide to make a form with a single input that has a maximum length as its validations.

First we install react-final-form by running `npm install final-form react-final-form`.

Next we start writing out actual component by starting with the imports.
```javascript
import React from 'react';
import { Form, Field } from 'react-final-form';
import InputField from 'terra-form-input/lib/InputField';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
```

Now we make the basis for our class by setting up its constructor and its render function.
```javascript
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Spacer marginBottom="small">
        <Form/>
      </Spacer>
    );
  }
}
```

Currently, this does not render anything. Let's create a `<Form>` component that contains initial values, and functionality for submission and validation.

Let's use the render props pattern to return our necessary components. Call this function `renderForm`.
```diff
  render() {
    return (
      <Spacer marginBottom="small">
-        <Form/>
+        <Form
+          render={this.renderForm}
+        />
      </Spacer>
    );
  }

+ renderForm() {
+   return (
+     <form noValidate>
+       <Field
+         name="example"
+       >
+         {({ input, meta }) => (
+           <InputField
+             inputId="example"
+             label="Example"
+             error={meta.error}
+             isInvalid={meta.error !== undefined}
+             inputAttrs={{
+               placeholder: 'Example',
+               ...input,
+             }}
+             onChange={(e) => { input.onChange(e.target.value); }}
+             value={input.value}
+             required
+           />
+         )}
+       </Field>
+       <Button text="Submit" type={Button.Opts.Types.SUBMIT} />
+     </form>
+   );
+ }
```

Let's attach functionality to the submit button. Create a `submitForm` function to save submittedValues into state.

```javascript
submitForm(values) {
  this.setState({
    submittedValues: values,
  });
}
```

Bind `onSubmit`, pass `onSubmit` as a prop to `<Form>`, pass `handleSubmit` to our render prop function, and pass `handleSubmit` to the native form's `onSubmit` prop.

```diff
constructor(props) {
  super(props);

  this.state = {};
+ this.submitForm = this.submitForm.bind(this);
}

render() {
  return (
    <Spacer marginBottom="small">
      <Form
+       onSubmit={this.submitForm}
        render={this.renderForm}
      />
    </Spacer>
  );
}

renderForm({ handleSubmit }) {
  return (
    <form
      noValidate
+     onSubmit={handleSubmit}
    >
      ...
    </form>
  );
}
```

Now our `Submit` button will actually submit things but it won't give us a visual confirmation of what has been submitted so lets modify our `render` function to show our `submittedValues`

```diff
render() {
  return (
    <Spacer marginBottom="small">
      <Form
        onSubmit={this.submitForm}
        render={this.renderForm}
      />
+     {this.state.submittedValues
+       && (
+       <div>
+         <p>Form Submitted Successfully With</p>
+         <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>
+       </div>
+       )
+     }
    </Spacer>
  );
}
```

Submit will now visually update with a JSON of our `submittedValues` state.

We don't need a specific initial value but let's set an initial value that is an empty string so we have an easy place to redefine it if need be. We add an object to our `<Form>`. We define our object with the property being the inputID of our `<InputField>`, which in this case is `example`, and the property's value being the value of the `<InputField>`.
```diff
render() {
  return (
    <Spacer marginBottom="small">
      <Form
        onSubmit={this.submitForm}
        render={this.renderForm}
+       initialValues={{ example: '' }}
      />
      ...
    </Spacer>
  );
}
```

Finally we need to validate our input field. This has two parts to it, a `validate` prop on our `<Form>` component and a `validate` prop on our `<Field>` component in our `renderForm` function.

The `<Form>` component's `validate` prop takes a validation function that reads all form values and returns validation errors. Let's create a function that checks the existence of `example` field's values. On error, set the ID to `required`. This will be displayed if validation fails.

```diff
render() {
  return (
    <Spacer marginBottom="small">
      <Form
        onSubmit={this.submitForm}
        render={this.renderForm}
        initialValues={{ example: '' }}
+       validate={(values) => {
+           const errors = {};
+           if (!values.example) {
+             errors.example = 'Required';
+           }
+           return errors;
+       }}
      />
      ...
    </Spacer>
  );
}
```

Our `validate` function returns an object that has properties, with the property being our ID, and its value being a string we want displayed for when it fails to validate.

The `<Field>` component's `validate` prop is similar to `<Form>`'s, with a main caveat; it only validate's it's value instead of all the values. Let's create a function that checks if the length is greater than 8. This function takes a single argument (value of our `<Field>`) and returns a string if this criteria is met.

```javascript
const validateLength = (name) => {
  if (name && name.length > 8) {
    return 'Name needs to be less than 9 characters long';
  }

  return undefined;
};
```

Finally, let's add the function as the `validate` prop to `<Field>` within our `renderForm` function.

```diff
renderForm({ handleSubmit }) {
  return (
    <form
      noValidate
      onSubmit={handleSubmit}
    >
    <Field
      name="example"
+     validate={validateLength}
    >
      ...
    </Field>
    <Button text="Submit" type={Button.Opts.Types.SUBMIT} />
    </form>
  );
}
```

We have created an input that is required and has max length of 8 characters by creating our own validate function. For ease of use, Terra provides utils for common validation use cases. In this case, we can use the `validateLength` function.

```diff
import FormValidationUtil from 'terra-form-validation';
...
const validateLength = (name) => {
- if (name && name.length > 8) {
+ if (!FormValidationUtil.isUnderMaxLength(name, 8)) {
    return 'Name needs to be less than 9 characters long';
  }

  return undefined;
};
```
