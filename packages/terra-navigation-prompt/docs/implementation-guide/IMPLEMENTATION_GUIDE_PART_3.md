# Terra Navigation Prompt - Implementation Guide

## Part 3 - Implementing a Custom Prompt Solution

At this point, you realize that you do not want to **ever** allow user's to navigate away from a Form with unsaved state. You can do that by using the NavigationPromptCheckpoint's `onPromptChange` prop.

```jsx
const FormSwitcher = () => {
  const [activeForm, setActiveForm] = useState('Form 1');
  const [activePrompts, setActivePrompts] = useState([]);

  return (
    <div>
      <h2>Form Switcher</h2>
      <p>Custom logic has been implemented to prevent navigation altogether when NavigationPrompts are present.</p>
      <button
        type="button"
        disabled={activeForm === 'Form 1' || activePrompts.length}
        onClick={() => {
          setActiveForm('Form 1');
        }}
      >
        Switch to Form 1
      </button>
      <button
        type="button"
        disabled={activeForm === 'Form 2' || activePrompts.length}
        onClick={() => {
          setActiveForm('Form 2');
        }}
      >
        Switch to Form 2
      </button>
      {activePrompts.length ? (
        <p>
          {activePrompts.map(prompt => prompt.description).join(', ')}
          {' '}
          has unsaved changes.
        </p>
      ) : null}
      <NavigationPromptCheckpoint
        onPromptChange={(prompts) => {
          setActivePrompts(prompts);
        }}
      >
        <Form title={activeForm} key={activeForm} />
      </NavigationPromptCheckpoint>
    </div>
  );
};
```

You remove the `ref` from the NavigationPromptCheckpoint and instead implement `onPromptChange` to store the currently rendered NavigationPrompt's in the FormSwitcher's state. You disable the 'Switch to' buttons altogether if a NavigationPrompt is detected and render your own custom message within the FormSwitcher to notify your users. You could also use this state to control other navigation-capable components, like client-side routers.
