# Terra Navigation Prompt - Implementation Guide

## Part 1 - Implementing the NavigationPrompt and NavigationPromptCheckpoint

To better notify the user of the Form's transient state, we update the Form to render a NavigationPrompt.

```diff
- import React, { useState } from 'react';
+ import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
+ import NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';

const Form = ({ title }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <p>{title}</p>
+     {inputValue.length ? <NavigationPrompt description={title} /> : undefined}
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

The Form renders the NavigationPrompt when the input has a non-empty value. If it were to render the NavigationPrompt at all times, the user would be prompted inappropriately when the input is empty.

The Form provides its `title` prop as the NavigationPrompt's `description` prop to give it an identifying feature. The `description` doesn't need to be unique across all rendered NavigationPrompts, but it should give our users a good idea of where the unsaved changes are at. For our purposes, the Form's `title` is sufficient.

Now that the Form is rendering a NavigationPrompt, the FormSwitcher needs to render a NavigationPromptCheckpoint around the Form to detect that prompt.

```diff
const FormSwitcher = () => {
  const [activeForm, setActiveForm] = useState('Form 1');
+ const formCheckpointRef = useRef();

  function onSwitchForm(formKey) {
+   formCheckpointRef.current.resolvePrompts({
+     title: 'Pending Changes',
+     message: 'Form data will be lost if this action is taken.',
+     rejectButtonText: `Return to ${activeForm}`,
+     acceptButtonText: 'Continue without Saving',
+   }).then(() => {
      setActiveForm(formKey);
+   });
  }

  return (
    <div>
      <h2>Form Switcher</h2>
-     <p>The NavigationPrompt is not implemented, so no prompting occurs.</p>
+     <p>The user will be prompted with the provided messaging when Forms are switched with unsaved changes present.</p>
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
+     <NavigationPromptCheckpoint
+       ref={formCheckpointRef}
+     >
        <Form title={activeForm} key={activeForm} />
+      </NavigationPromptCheckpoint>
    </div>
  );
};
```

The FormSwitcher gets a ref to the NavigationPromptCheckpoint; this example uses the [useRef hook](https://reactjs.org/docs/hooks-reference.html#useref), but any of the supported ref retrieval methods would be sufficient. The FormSwitcher then uses this ref to call the `resolvePrompts` function when it wants to switch to a new Form.

The `resolvePrompts` function is an instance function of the NavigationPromptCheckpoint. When `resolvePrompts` is called, the NavigationPromptCheckpoint will render a NotificationDialog and return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises). The Promise will be resolved immediately if no NavigationPrompts have been rendered below the checkpoint, so we don't need to check for the presence of any NavigationPrompts before we call it. The Promise will also resolve if a user presses the NotificationDialog's secondary action button. The Promise will reject if a user presses the NotificationDialog's primary action button. In our example, we only update the FormSwitcher's state when the Promise is resolved.

With those changes in place, the FormSwitcher will prompt the user for confirmation when they attempt to switch away from Forms with unsubmitted data. 
