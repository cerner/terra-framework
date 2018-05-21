# Validation Functions

*react-final-form* gives you the ability to create your own validation functions. For custom validations, the idea is that a message will be returned if the function finds an error with the form input value, or returns undefined if no errors are detected for the given input value.

**Example validation functions**

```js
const required = value => (value ? undefined : 'Required')

const minLength = value => {
  const MIN_LENGTH = 3;

  if (value === undefined || value === null) {
    return 'Empty Strings are not allowed'
  }

  if (value.length < MIN_LENGTH) {
    return `String must be at least ${MIN_LENGTH} characters`;
  }

  return '';
}
```

In order to use them, you just need to provide the validation prop on the react-final-form Field component, and populate the desired input component with the onChange and value provided through the Field validation library, like in the example usage below:

```jsx
import { Field } from 'react-final-form';
import InputField from 'terra-form-input/lib/InputField';

<Field
  type="text"
  name="user_name"
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
      required

      onChange={(e) => { input.onChange(e.target.value); }}
      value={input.value}
    />
  )}
</Field>
```

## Asynchronous Validations

There maybe times you need to do remote validations such as Unique Username checks. To best handle this scenario with wide browser support, an OnBlurValidation can be added to a component, where the function takes in two parameters: the value of the input, and a callback setError that sets the error status of the input.

**Note**: If you need to run this in IE11, the [transform-async-to-generator](https://www.npmjs.com/package/babel-plugin-transform-async-to-generator) plugin needs to be added to your .babelrc file.

**Example Asynchronous Validation**

```jsx
const validateUniqueUser = async (name) => {
  let response = new Promise((resolve, reject) => {
    if (name !== 'Unique User') {
      return resolve('');
    } else {
      return resolve('Name is Unavailable');
    }
  });

  await response;
  return response;
}

```

*Note:* The promise can be any kind of promise, including calls with axios and other libraries.

# Parsing

Form inputs can be parsed to ensure input values follow specific formats. This could be useful when you want to restrict numeric inputs to only allow users to enter in digits, and force formating of phone numbers.

```jsx
const normalizePhone = value => {
  if (!value) {
    return value
  };

  const onlyNums = value.replace(/[^\d]/g, '');

  if (onlyNums.length <= 3) {
    return onlyNums;
  }

  else if (onlyNums.length <= 7) {
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`;
  } else {
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`;
  }
}

```

Consult [react-final-form](https://github.com/final-form/react-final-form) for further functionality that can be used.
