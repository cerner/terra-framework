# Terra Navigation Prompt - Implementation Guide

## Part 2 - Using Custom Messages in NavigationPromptCheckpoint

The FormSwitcher's checkpoint renders a default message and title in its NotificationDialog. This may be sufficient for most use cases, but you want to render a custom title and message that give your users more context.

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
