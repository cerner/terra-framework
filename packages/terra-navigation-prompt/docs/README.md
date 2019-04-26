# Terra Navigation Prompt

The NavigationPrompt and NavigationPromptCheckpoint components allow for the detection and management of components with unsaved state.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-navigation-prompt`
- Import the module
  - `import NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';`

This package uses React's Context for inter-component communication. A single instance of this package must be installed to ensure that communication occurs between all Context Providers and Consumers. To help ensure a single instance is installed, this package should be defined as a peer dependency in packages that are reusable libraries or otherwise consumed by other packages.

## Rationale

A React component has complete control over its own rendering logic. It can render child components and unmount those child components as it sees fit. It follows that any individual component has no direct control over its own mounting and unmounting; it is rendered (or not) at the discretion of its parent. A component must rely on its lifecycle events to determine how it is being implemented.

However, a component's children can be stateful and responsible for important user input or interactions. If the user can navigate away from that child component, it may be necessary for that child component to notify the user that their workflow is incomplete or that some transient state has not yet been persisted. If the component has no control over its own unmounting, how can it communicate this state to the overall application before the component is already being unmounted?

The most straightforward solution is to lift the state up. If the child component's state is lifted into a parent component, it can either be more directly managed by the parent component or persisted indefinitely. **This is the strategy that should be implemented by most components.** However, for very large applications or highly composable applications built out of many stateful components, lifting the state may not be feasible.

Another solution is to expose callbacks from the stateful child components. Whenever the stateful components' state changes, these callbacks would be executed to notify the parent component of the updated state. This works well at a small scale, but this becomes hard to maintain as the component tree increases in depth. One would have to chain these callbacks many levels deep to ensure every component is kept abreast of the current state, and every component, even those without these state concerns, would have to adhere to a consistent prop interface for those callbacks.

The `NavigationPrompt` and the `NavigationPromptCheckpoint` were created to smooth over the rough edges of the aforementioned strategies. By using this package, state can remain localized to the components that own it, and the presence of transient child state can be determined after each render without impacting every component in the tree.

## Usage

### `NavigationPrompt`

When a component renders a NavigationPrompt, it tells its parent components two things: that the component is in the middle of something important, and that users may care about the component going away.

The NavigationPrompt can be rendered with two props: a `description` string that gives context to the NavigationPrompt, and a `metaData` object that can be used to provide additional data that may be relevant to the NavigationPrompt.

The NavigationPrompt can be rendered like any other component, but prop consistency should be maintained between renders when possible. Creating a new object for the `metaData` prop within a render function will cause the NavigationPrompt to re-register itself during every update:

```jsx
render() {
  return (
    <NavigationPrompt 
      description="This prompt will register and notify every time the component renders" 
      metaData={{ important: 'info' }} 
    />
  );
}
```

To prevent duplicate registrations, the `metaData` value can be stored inside a component's state or an internal property and updated only when necessary:

```diff
+ constructor() {
+   this.state = {
+     metaDataValue: {
+       important: 'info',
+     }
+   }
+ }

render() {
  return (
    <NavigationPrompt
-     description="This prompt will register and notify every time the component renders"
-     metaData={{ important: 'info' }}
+     description="My props are consistent between renders, so this prompt will not re-register or notify"
+     metaData={this.state.metaDataValue}
    />
  );
}
```

### `NavigationPromptCheckpoint`

Any component that navigates between stateful child components should render NavigationPromptCheckpoints around those children. Each NavigationPrompt rendered by a child will be registered to the NavigationPromptCheckpoints above it in the component tree. The implementer of each NavigationPromptCheckpoint can use the registered data to prompt the user before navigating or prevent navigation altogether.

#### `onPromptChange`

The `onPromptChange` function prop is used to communicate NavigationPrompt registrations to the implementer of a NavigationPromptCheckpoint. The function is called with an array of objects containing each registered NavigationPrompt's `description` and `metaData` properties.

> Note: The `onPromptChange` prop will be called after each NavigationPrompt registration and removal. It may be called more than once with the same array of NavigationPrompt data. Calls to `setState` within onPromptChange should be performed only when necessary to minimize component updates.

#### `resolvePrompts`

The `resolvePrompts` function can be accessed from the ref to a NavigationPromptCheckpoint. Calling `resolvePrompts` results in a Promise being returned and a NotificationDialog being presented to the user with options to either confirm or cancel their action. If the user confirms the action, the dialog will close, and the returned Promise will be resolved. If the user cancels the action, the dialog will close, and the returned Promise will be rejected. If no NavigationPrompts are detected, no dialog is presented, and the returned Promise will be resolved.

`resolvePrompts` accepts either an Object or function argument. The Object should contain the text strings used to render the NotificationDialog. The function should return an Object containing the text strings used to render the NotificationDialog. Additionally, the function will receive an array of registered NavigationPrompts as an argument. The array of prompts can be used to create dynamic strings based on the currrent set of registered prompts.

The keys expected in the resolvePrompts Object or return value include:

|Key|Type|Description|
|---|---|---|
|`title`|String|The title of the NotificationDialog|
|`message`|String|The message of the NotificationDialog|
|`rejectButtonText`|String|The text to render within the NotificationDialog's primary action button|
|`acceptButtonText`|String|The text to render within the NotificationDialog's secondary action button|

```jsx
const ResolvePromptExample = () => {
  const [contentKey, setContentKey] = useState(false);
  const checkpointRef = useRef();

  /**
   * This resolvePrompts implementation provides an Object directly.
   */
  const resetWithStaticText = () => {
    checkpointRef.current.resolvePrompts({
      title: 'Pending Changes',
      message: 'Data will be lost if this action is taken',
      rejectButtonText: `Return`,
      acceptButtonText: 'Continue without Saving',
    }).then(() => {
      // User decided to continue
      setContentKey({ contentKey: !state.contentKey });
    }).catch(() => {
      // User decided to cancel, so the state is not updated.
    });
  };

  /**
   * This resolvePrompts implementation provides a function that builds dynamic strings and return
   * an Object.
   */
  const resetWithDynamicText = () => {
    checkpointRef.current.resolvePrompts(prompts => ({
      title: prompts.map(prompt => prompt.description).join(', '),
      message: `Data will be lost in the following sections: ${prompts.map(prompt => prompt.description).join(', ')}`,
      rejectButtonText: `Return`,
      acceptButtonText: 'Continue without Saving',
    })).then(() => {
      // User decided to continue
      setContentKey({ contentKey: !state.contentKey });
    }).catch(() => {
      // User decided to cancel, so the state is not updated.
    });
  }

  return (
    <div>
      <button onClick={resetWithStaticText}>
        Reset (Static Message)
      </button>
      <button onClick={resetWithDynamicText}>
        Reset (Dynamic Message)
      </button>
      <NavigationPromptCheckpoint
        ref={checkpointRef}
      >
        <Form key={contentKey} />
      </NavigationPromptCheckpoint>
    </div>
  )
}
```

## Extending the NavigationPrompt

The various APIs provided and consumed by the NavigationPrompt and NavigationPromptCheckpoint are purposefully broad and unrestrictive. If more defined or restricted APIs are desirable for a application platform, these components can and should be wrapped by components that provide the necessary interfaces.

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
