# Making an Input With a Maximum Length

This is a step-by-step guide to making a form with a single input that has a maximum length as its validations.

First we start with out imports
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

Current we render nothing. Lets create a `<Form>` component that contains initial values, and functionality for submission and validation.

Let's use the render props pattern to return our necessary components. Call this function `renderForm`.
```javascript
render() {
  return (
    <Spacer marginBottom="small">
      <Form
        render={this.renderForm} // added line
      />
    </Spacer>
  );
}

renderForm() {
  return (
    <form>
      <Field
        name="example"
      >
        {({ input, meta }) => (
          <InputField
            inputId="example"
            label="Example"
            error={meta.error}
            isInvalid={meta.error !== undefined}
            inputAttrs={{
              placeholder: 'Example',
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
```

With this, our component now renders a simple field marked as required with a label of Example, and a button that if we click on currently does nothing. So our next step is to make our submit button actually does something. For our example, we're just going to set up a state variable that gets assigned the submitted values.

```javascript
submitForm(values) {
  this.setState({
    submittedValues: values,
  });
}
```

Now that we have our `submitForm` function, we need to incorporate it into our existing code. We need to bind our function, add it to our `<Form>` as it's `onSubmit` prop, and make sure our `renderForm` function passes the function properly to the `<form>` as it's `onSubmit` prop.

```javascript
constructor(props) {
  super(props);

  this.state = {};
  this.submitForm = this.submitForm.bind(this); // added line
}

render() {
  return (
    <Spacer marginBottom="small">
      <Form
        onSubmit={this.submitForm} // added line
        render={this.renderForm}
      />
    </Spacer>
  );
}

renderForm({ handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit} //added line
    >
      ...
    </form>
  );
}
```

Now our `Submit` button will actually submit things but it won't give us a visual confirmation of what has been submitted so lets modify our `render` function to show our `submittedValues`

```javascript
render() {
  return (
    <Spacer marginBottom="small">
      <Form
        onSubmit={this.submitForm}
        render={this.renderForm}
      />
      {this.state.submittedValues
        && (
        <div>
          <p>Form Submitted Successfully With</p>
          <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>
        </div>
        )
      }
    </Spacer>
  );
}
```

Submit will now visually update with a JSON of our `submittedValues` state.

Next is to set up an initial value for our field. This is fairly simple and just requires us to add a prop called `initialValues` to our `<Form>` component that has an object defining our values in properties with the property being the inputID of our `<InputField>`, which in this case is `example`, and the property's value being the value of the `<InputField>`.
```javascript
render() {
  return (
    <Spacer marginBottom="small">
      <Form
        onSubmit={this.submitForm}
        render={this.renderForm}
        initialValues={{ example: '' }}
      />
      ...
    </Spacer>
  );
}
```

We don't need a specific initial value but our initial value is an empty string and has an easy place to be redefined if need be.

Finally we need to validate our input field. This has two parts to it, a `validate` prop on our `<Form>` component and a `validate` prop on our `<Field>` component in our `renderForm` function.

The `<Form>` component's `validate` prop is supposed to be 'A whole-record validation function that takes all the values of the form and returns any validation errors.' Since its a general validation we'll do a little more of a general validation here, in the form of just checking to see if the `example` field's value is defined. We do this by defining a function that takes a single argument, and then checks the various properties of that object based on ID.

```javascript
render() {
  return (
    <Spacer marginBottom="small">
      <Form
        onSubmit={this.submitForm}
        render={this.renderForm}
        initialValues={{ example: '' }}
        validate={(values) => {
            const errors = {};

            if (!values.example) {
              errors.example = 'Required';
            }

            return errors;
        }}
      />
      ...
    </Spacer>
  );
}
```

Our `validate` function returns an object that has properties, with the property being our ID, and its value being a string we want displayed for when it fails to validate.

The `<Field>` component's `validate` prop works in a similar way to `<Form>`'s. The main difference being that it only validate's it's value instead of all the values, so we'll begin by defining a simple function that takes a single argument that is the value of our `<Field>` and will return a string if that value is longer than 7 characters long. We will return `undefined` otherwise.

```javascript
const validateLength = (name) => {
  if (name && name.length > 7) {
    return 'Name needs to be less than 8 characters long';
  }

  return undefined;
};
```

And now all we have to do is go into our renderForm function and add the `validate` prop to `<Field>`.

```javascript
renderForm({ handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit}
    >
    <Field
      name="example"
      validate={validateLength} //added line
    >
      ...
    </Field>
    <Button text="Submit" type={Button.Opts.Types.SUBMIT} />
    </form>
  );
}
```

And with that we have created an input that is required and has max length of 7 characters. This showed how to make the validate function by yourself, but if we wanted to we could shorten the code a bit more under the validateLength function through the use of `terra-form-validation`'s FormValidationUtil class like so.

```javascript
import FormValidationUtil from 'terra-form-validation';
...
const validateLength = (name) => {
  if (!FormValidationUtil.maxLength(name, 8)) {
    return 'Name needs to be less than 8 characters long';
  }

  return undefined;
};
```
