# Validation Functions

*react-final-form* gives you the ability to create your own validation functions. The key for react-final-form is that a validation function returns a blank message for when an input is invalid, and returns undefined when an input does not have any errors.

Example validation functions

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

## Asynchronous Validations

There maybe times you need to do remote validations such as for Unique Username checks. This involved awaiting for a Promise to resolve, and passing it's value off to the validation function.

Example Asynchronous Validation

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
  if (!value) return value
  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 3) return onlyNums
  if (onlyNums.length <= 7)
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`
  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(
    6,
    10
  )}`
}

```

Consult [react-final-form](https://github.com/final-form/react-final-form) for further functionality that can be used.