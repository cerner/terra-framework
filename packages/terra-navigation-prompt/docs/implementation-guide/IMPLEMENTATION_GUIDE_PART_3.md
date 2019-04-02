# Terra Navigation Prompt - Implementation Guide

## Part 3 - Implementing a Custom Prompt Solution

At this point, we realize that we do not want to **ever** allow users to navigate away from a Form with unsaved state. We can do that by using the NavigationPromptCheckpoint's `onPromptChange` prop.

```diff
- import React, { useState, useRef } from 'react';	
+ import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavigationPrompt, { NavigationPromptCheckpoint } from '../../../../index';

const Form = ({ title }) => {
  const [inputValue, setInputValue] = useState('');
- const promptMetaData = useRef({		
-	  timeOfLastInput: undefined,		
- });	
  return (
    <div>
      <p>{title}</p>
-     {inputValue.length ? <NavigationPrompt description={title} metaData={promptMetaData.current} /> : undefined}	      
+     {inputValue.length ? <NavigationPrompt description={title} /> : undefined}
      <input
        type="text"
        onChange={(event) => {
-         promptMetaData.current = {		
-	          timeOfLastInput: Date.now(),		
-	        };	          
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

const FormSwitcher = () => {
  const [activeForm, setActiveForm] = useState('Form 1');
- const formCheckpointRef = useRef();	  
+ const [activePrompts, setActivePrompts] = useState([]);

  return (
    <div>
      <h2>Form Switcher</h2>
-     <p>The user will be prompted with custom messaging when Forms are switched with unsaved changes present.</p>	
+     <p>Custom logic has been implemented to prevent navigation altogether when NavigationPrompts are present.</p>
      <button
        type="button"
-       disabled={activeForm === 'Form 1'}
+       disabled={activeForm === 'Form 1' || activePrompts.length}
        onClick={() => {
-         formCheckpointRef.current.resolvePrompts('Form Switcher', 'Switching forms will result in lost data.').then(() => {
-           setActiveForm('Form 1');		
-         });	
+         setActiveForm('Form 1');
        }}
      >
        Switch to Form 1
      </button>
      <button
        type="button"
-       disabled={activeForm === 'Form 2'}
+       disabled={activeForm === 'Form 2' || activePrompts.length}
        onClick={() => {
-         formCheckpointRef.current.resolvePrompts('Form Switcher', 'Switching forms will result in lost data.').then(() => {
-           setActiveForm('Form 2');		
-         });	
+         setActiveForm('Form 2');
        }}
      >
        Switch to Form 2
      </button>
      <NavigationPromptCheckpoint
-       ref={formCheckpointRef}	
+       onPromptChange={(prompts) => {
+         setActivePrompts(prompts);
+       }}
      >
        <Form title={activeForm} key={activeForm} />
      </NavigationPromptCheckpoint>
    </div>
  );
};

export default FormSwitcher;
```

We remove the `ref` from the NavigationPromptCheckpoint and instead implement `onPromptChange` to store the currently rendered NavigationPrompt's in the FormSwitcher's state. We disable the 'Switch to' buttons altogether if a NavigationPrompt is detected and render our own custom message within the FormSwitcher to notify our users. We could also use this state to control other navigation-capable components, like client-side routers.
