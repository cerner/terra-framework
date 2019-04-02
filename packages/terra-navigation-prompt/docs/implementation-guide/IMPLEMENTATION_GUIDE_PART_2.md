# Terra Navigation Prompt - Implementation Guide

## Part 2 - Using Custom Messages in NavigationPromptCheckpoint

The FormSwitcher's checkpoint renders a default message and title in its NotificationDialog. This may be sufficient for most use cases, but we want to render a custom title and message that give our users more context.

```diff
const Form = ({ title }) => {
  const [inputValue, setInputValue] = useState('');
+  const promptMetaData = useRef({
+    timeOfLastInput: undefined,
+  });

  return (
    <div>
      <p>{title}</p>
-     {inputValue.length ? <NavigationPrompt description={title} /> : undefined}           
+     {inputValue.length ? <NavigationPrompt description={title} metaData={promptMetaData.current} /> : undefined}
      <input
        type="text"
        onChange={(event) => {
+         promptMetaData.current = {
+           timeOfLastInput: Date.now(),
+         };
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

We add some metaData to the Form's NavigationPrompt. For our (admittedly contrived) use case, we want to know the when the last input change ocurred, so we store that value and provide it to the NavigationPrompt as metaData.

```diff
const FormSwitcher = () => {
  const [activeForm, setActiveForm] = useState('Form 1');
  const formCheckpointRef = useRef();

  return (
    <div>
      <h2>Form Switcher</h2>
-     <p>The user will be prompted with the standard messaging when Forms are switched with unsaved changes present.</p>	      
+     <p>The user will be prompted with custom messaging when Forms are switched with unsaved changes present.</p>
      <button
        type="button"
        disabled={activeForm === 'Form 1'}
        onClick={() => {
-          formCheckpointRef.current.resolvePrompts().then(() => {          
+          formCheckpointRef.current.resolvePrompts('Form Switcher', 'Switching forms will result in lost data.').then(() => {
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
-          formCheckpointRef.current.resolvePrompts().then(() => {          
+          formCheckpointRef.current.resolvePrompts('Form Switcher', 'Switching forms will result in lost data.').then(() => {
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

When we call `resolvePrompts`, we provide custom title and message strings built with the navigation data returned by `onPromptChange`. This will give our users a better idea of where the unsaved changes are at and whether or not they care about them.
