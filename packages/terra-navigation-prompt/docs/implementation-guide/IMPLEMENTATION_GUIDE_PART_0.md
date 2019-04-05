# Terra Navigation Prompt - Implementation Guide

Assume we have built a simple component, the FormSwitcher, that toggles between showing two different stateful components, Form 1 and Form 2. Users of the FormSwitcher have recently complained that they can switch between forms before submitting their in progress form, losing their data in the process. We want to implement the NavigationPrompt and NavigationPromptCheckpoint to give our users more control over the FormSwitcher's navigation.

> Note: This implementation guide features examples and use cases for the various APIs provided by the NavigationPrompt and NavigationPromptCheckpoint.
> Please review your individual requirements to see which APIs are necessary for your specific needs.

## Part 0 - Reviewing the Initial FormSwitcher Implementation

```jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ title }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <p>{title}</p>
      <input
        type="text"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        value={inputValue}
      />
      <button
        type="button"
        onClick={() => {
          setInputValue('');
        }}
      >
        Submit
      </button>
    </div>
  );
};

Form.propTypes = {
  title: PropTypes.string,
};

const FormSwitcher = () => {
  const [activeForm, setActiveForm] = useState('Form 1');

  function onSwitchForm(formKey) {
    setActiveForm(formKey);
  }

  return (
    <div>
      <h2>Form Switcher</h2>
      <p>The NavigationPrompt is not implemented, so no prompting occurs.</p>
      <button
        type="button"
        disabled={activeForm === 'Form 1'}
        onClick={onSwitchForm.bind(null, 'Form 1')}

      >
        Switch to Form 1
      </button>
      <button
        type="button"
        disabled={activeForm === 'Form 2'}
        onClick={onSwitchForm.bind(null, 'Form 2')}
      >
        Switch to Form 2
      </button>
      <Form title={activeForm} key={activeForm} />
    </div>
  );
};

export default FormSwitcher;
```

The FormSwitcher renders two buttons that allow users to toggle between showing Form 1 and Form 2. Form 1 and Form 2 are unique instances of the Form component. 

The Form component renders a text input element and keeps the input's value in state. When the Submit button is pressed, the value is reset to simulate a mock submission.

If we enter text into Form 1's input, switch to Form 2, and then switch back to Form 1, we will notice our previously entered value is gone. This is not good, because that data in Form 1 could be *very* important to our users.
