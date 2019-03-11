# Terra Navigation Prompt - Implementation Guide

Assume you have built a simple component, the FormSwitcher, that toggles between showing two different stateful components, Form 1 and Form 2. It's not pretty, but it works well. However, users of the FormSwitcher have complained that they can switch between forms before submitting their in progress form, loosing their data in the process. You want to implement the NavigationPrompt and NavigationPromptCheckpoint to give your users more control over the FormSwitcher's navigation.

## Step 1 - The Default FormSwitcher Implementation

You start off by reviewing the base implementation.

```jsx
import React, { useState } from 'react';

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
          setInputValue(undefined);
        }}
      >
        Submit
      </button>
    </div>
  );
};

const FormSwitcher = () => {
  const [activeForm, setActiveForm] = useState('Form 1');

  return (
    <div>
      <h2>Form Switcher</h2>
      <button
        type="button"
        disabled={activeForm === 'Form 1'}
        onClick={() => {
          setActiveForm('Form 1');
        }}
      >
        Switch to Form 1
      </button>
      <button
        type="button"
        disabled={activeForm === 'Form 2'}
        onClick={() => {
          setActiveForm('Form 2');
        }}
      >
        Switch to Form 2
      </button>
      <Form title={activeForm} key={activeForm} />
    </div>
  );
};
```

The FormSwitcher renders two buttons that allow users to toggle between showing Form 1 and Form 2. Form 1 and Form 2 are unique instances of the Form component. 

The Form component renders a text input element and keeps the input's value in state. When the Submit button is pressed, the value is reset to simulate a mock submission.

If you enter text into Form 1's input, switch to Form 2, and then switch back to Form 1, you will notice your previously entered value is gone. This is not good, because the data in Form 1 is *very* important to your users.

## Step 2 - Implementing a basic NavigationPrompt and NavigationPromptCheckpoint

To better notify the user of the Form's transient state, you update the Form to render a NavigationPrompt.

```jsx
import NavigationPrompt from 'terra-navigation-prompt';

const Form = ({ title }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <p>{title}</p>
      {inputValue.length ? <NavigationPrompt description={title} /> : undefined}
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
```

The Form only renders the NavigationPrompt when the input has a non-empty value. If it were to render the NavigationPrompt at all times, the user would be prompted inappropriately when the input is empty.

The Form provides its `title` prop as the NavigationPrompt's `description` prop to give it an identifying feature. The `description` doesn't need to be unique across all rendered NavigationPrompts, but it should give your users a good idea of where the unsaved changes are at. For your purposes, the Form's `title` is sufficient.

Now that the Form is rendering a NavigationPrompt, the FormSwitcher needs to render a NavigationPromptCheckpoint around the Form to detect that prompt.

```jsx
import { NavigationPromptCheckpoint } from 'terra-navigation-prompt';

const FormSwitcher = () => {
  const [activeForm, setActiveForm] = useState('Form 1');
  const formCheckpointRef = useRef();

  return (
    <div>
      <h2>Form Switcher</h2>
      <button
        type="button"
        disabled={activeForm === 'Form 1'}
        onClick={() => {
          formCheckpointRef.current.resolvePrompts().then(() => {
            setActiveForm('Form 1');
          });
        }}
      >
        Switch to Form 1
      </button>
      <button
        type="button"
        disabled={activeForm === 'Form 2'}
        onClick={() => {
          formCheckpointRef.current.resolvePrompts().then(() => {
            setActiveForm('Form 2');
          });
        }}
      >
        Switch to Form 2
      </button>
      <NavigationPromptCheckpoint
        ref={formCheckpointRef}
      >
        <Form title={activeForm} key={activeForm} />
      </NavigationPromptCheckpoint>
    </div>
  );
};
```

The FormSwitcher gets a ref to the NavigationPromptCheckpoint. The example uses the [useRef hook](https://reactjs.org/docs/hooks-reference.html#useref), but any of the supported ref retrieval methods would work fine. The FormSwitcher then uses this ref to call the `resolvePrompts` function when it wants to switch to a new Form.

The `resolvePrompts` function is an instance function of the NavigationPromptCheckpoint. When `resolvePrompts` is called, the NavigationPromptCheckpoint will render a NotificationDialog and return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises). The Promise will be resolved immediately if no NavigationPrompts have been rendered below the checkpoint, so you don't need to check for the presence of any NavigationPrompts before you call it. The Promise will also resolve if a user presses the NotificationDialog's primary action button. The Promise will be rejected if a user presses the NotificationDialog's secondary action button. In your example, you only update the FormSwitcher's state when the Promise is resolved.

And with those changes in place, the FormSwitcher will prompt the user for confirmation when they attempt to switch away from Forms with unsubmitted data. 

## Step 3 - Custom Messaging

The FormSwitcher's checkpoint renders a default message and title in its NotificationDialog. This may be sufficient for most use cases, but you want to render a custom title and message that give the user more context.

```jsx
const Form = ({ title }) => {
  const [inputValue, setInputValue] = useState('');
  const promptMetaData = useRef({
    timeOfLastInput: undefined,
  });

  return (
    <div>
      <p>{title}</p>
      {inputValue.length ? <NavigationPrompt description={title} metaData={promptMetaData.current} /> : undefined}
      <input
        type="text"
        onChange={(event) => {
          promptMetaData.current = {
            timeOfLastInput: Date.now(),
          };
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
```

You add some metaData to the Form's NavigationPrompt. For your (admittedly contrived) use case, you want to know the when the last input change ocurred, so you store that value and provide it to the NavigationPrompt as metaData.

```jsx
const FormSwitcher = () => {
  const [activeForm, setActiveForm] = useState('Form 1');
  const formCheckpointRef = useRef();

  return (
    <div>
      <h2>Form Switcher</h2>
      <button
        type="button"
        disabled={activeForm === 'Form 1'}
        onClick={() => {
          formCheckpointRef.current.resolvePrompts().then(() => {
            setActiveForm('Form 1');
          });
        }}
      >
        Switch to Form 1
      </button>
      <button
        type="button"
        disabled={activeForm === 'Form 2'}
        onClick={() => {
          formCheckpointRef.current.resolvePrompts().then(() => {
            setActiveForm('Form 2');
          });
        }}
      >
        Switch to Form 2
      </button>
      <NavigationPromptCheckpoint
        ref={formCheckpointRef}
        customResolverTitle={prompts => `${prompts.map(prompt => prompt.description).join(', ')}`}
        customResolverMessage={prompts => `There are unsubmitted changes in ${prompts.map(prompt => `${prompt.description} (${prompt.metaData.timeOfLastInput})`).join(', ')}. Continue with Form switch?`}
      >
        <Form title={activeForm} key={activeForm} />
      </NavigationPromptCheckpoint>
    </div>
  );
};
```

You then provide the FormSwitcher's checkpoint with customResolverTitle and customResolverMessage props. These props take either strings or, as in your case, functions that return a string. The functions are called with an array of the currently registered NavigationPrompts found by the checkpoint. You can then construct your own title and message using the prompt descriptions and metaData values. This will give your users a better idea of where the unsaved changes are at and whether or not they care about them.

## Step 4 - Custom Prompt Handling

At this point, you realize that you do not want to **ever** allow user's to navigate away from a Form with unsaved state. You can do that by using the NavigationPromptCheckpoint's `onPromptChange` prop.

You remove the `ref` from the NavigationPromptCheckpoint and instead implement `onPromptChange` to store the currently rendered NavigationPrompt's in the FormSwitcher's state. You disable the 'Switch to' buttons altogether if a NavigationPrompt is detected and render your own custom message within the FormSwitcher to notify your users. You could also use this state to control other navigation-capable components, like client-side routers.
