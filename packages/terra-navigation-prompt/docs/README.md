# Terra Navigation Prompt

The NavigationPrompt and NavigationPromptCheckpoint components allow for the detection and management of components with unsaved state.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-navigation-prompt`
- Import the module
  - `import NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';`

## Rationale

A React component has complete control over its own rendering logic. It can render child components and unmount those child components as it sees fit. It follows that any individual component has no direct control over its own mounting and unmounting; it is rendered (or not) at the discretion of its parent. A component must rely on its lifecycle events to determine how it is being implemented.

However, a component's children can be stateful and responsible for important user input or interactions. If the user can navigate away from that child component, it may be necessary for that child component to notify the user that their workflow is incomplete or that some transient state has not yet been persisted. If the component has no control over its own unmounting, how can it communicate this state to the overall application before the component is already being unmounted?

The most straightforward solution is to lift the state up. If the state is lifted into a parent component, it can be more directly managed by the component responsible for navigation, or it could be persisted indefinitely. **This is the strategy that should be implemented by most components.** However, for very large applications or highly composable applications built out of many stateful components, lifting the state may not be feasible.

Another solution is to expose callbacks from the stateful components. Whenever the stateful component's state changes, the callbacks are executed to notify the consumer of the current state. This works well at a small scale, but this becomes hard to maintain as the component tree increases in depth. One would have to chain these callbacks many levels deep to ensure every component is kept abreast of the current state, and every component, even those without these state concerns, would have to adhere to a consistent prop interface for those callbacks.

The NavigationPrompt and the NavigationPromptCheckpoint were created smooth over the rough edges of the aforementioned strategies. Components that have sensitive state can render a NavigationPrompt to make their state known to the application. Components that navigate between components can use the NavigationPromptCheckpoint to check for the presence of NavigationPrompts and inform the user in a consistent way. State remains localized to the component that needs it, communication of state changes occurs automatically, and components that don't share these concerns can safely ignore all of it.

## Usage

### `NavigationPrompt`

When a component renders a NavigationPrompt, it is telling its parent components two things: that the component is in the middle of something important, and that users may care about the component going away.

The NavigationPrompt can be rendered with two props: a `description` string that gives context to the NavigationPrompt, and a `metaData` object that can be used to provide additional data that may be relevant to the NavigationPrompt.

The NavigationPrompt can be rendered like any other component, but prop consistency should be maintained between renders when possible. Creating a new object for the `metaData` prop within a render function will cause the NavigationPrompt to deregister and reregister itself during every update:

```jsx
render() {
  return (
    <NavigationPrompt description="This prompt will register and notify every time the component renders" metaData={{ important: 'info' }} />
  );
}
```

To avoid this, the `metaData` value can be stored inside a component's state or an internal property and updated only when necessary:

```jsx
constructor() {
  this.state = {
    metaDataValue: {
      important: 'info',
    }
  }
}

render() {
  return (
    <NavigationPrompt description="My props are consistent between renders, so this prompt will not re-register or notify" metaData={this.state.metaDataValue} />
  );
}
```

### `NavigationPromptCheckpoint`

The NavigationPromptCheckpoint can be used to detect the presence of NavigationPrompts rendered within it. 

#### `onPromptChange`

The `onPromptChange` function prop is used to communicate NavigationPrompt registrations to the implementer of the NavigationPromptCheckpoint. The function is called with an array of objects containing each registered NavigationPrompt's `description` and `metaData` properties.

> Note: The `onPromptChange` prop will be called after each NavigationPrompt registration and removal. It may be called more than once with the same array of NavigationPrompt data. Calls to `setState` within onPromptChange should be performed only when necessary to minimize component updates.

#### `resolvePrompts`

The `resolvePrompts` function be accessed from the ref to a NavigationPromptCheckpoint. Calling `resolvePrompts` results in a Promise being returned and a NotificationDialog being presented to the user with options to either confirm or cancel their action. If the user confirms the action, the dialog will close, and the returned Promise will be resolved. If the user cancels the action, the dialog will close, and the returned Promise will be rejected. If no NavigationPrompts are detected, no dialog is presented, and a resolved Promise is returned.

`resolvePrompts` accepts a single Object argument that should contain the text strings used to render the NotificationDialog. If these strings need to present information based on the currently registered NavigationPrompts, the `onPromptChange` prop can be used to receive that data and build those strings as needed.

The supported keys in the resolvePropts argument include:

|Key|Type|Description|
|---|---|---|
|`title`|String|The title of the NotificationDialog|
|`message`|String|The message of the NotificationDialog|
|`rejectButtonText`|String|The text to render within the NotificationDialog's primary action button|
|`acceptButtonText`|String|The text to render within the NotificationDialog's secondary action button|

```jsx
constructor() {
  this.checkpointRef = React.createRef();
  this.state = {
    contentKey: false,
  }
}

render() {
  const { contentKey } = this.state;
  return (
    <div>
      <button
        onClick={() => {
          this.checkpointRef.current.resolvePrompts({
            title: 'Pending Changes',
            message: 'Content data will be lost if this action is taken.',
            rejectButtonText: `Return`,
            acceptButtonText: 'Continue without Saving',
          }).then(() => {
            // User decided to continue
            this.setState(state => ({ contentKey: !state.contentKey }));
          }).catch(() => {
            // User decided to cancel, so the state is not updated.
          });
        }}
      >
        Reset Content
      </button>
      <NavigationPromptCheckpoint
        ref={this.checkpointRef}
      >
        <Content key={contentKey} />
      </NavigationPromptCheckpoint>
    </div>
  );
}
```

### `PromptRegistrationContext`

The PromptRegistrationContext defines the communication contract between NavigationPrompts and NavigationPromptCheckpoints. A PromptRegistrationContext.Provider must provide an Object value with the following attributes:

|Key|Type|Description|
|---|---|---|
|`registerPrompt(promptId, promptDescription, metaData)`|Function|A function which should be called when a NavigationPrompt is mounted.|
|`deregisterPrompt(promptId)`|Function|A function which should be called when a NavigationPrompt is unmounted.|

## Extending the NavigationPrompt

The various APIs provided and consumed by the NavigationPrompt and NavigationPromptCheckpoint are purposefully broad and unrestrictive. If more defined or restricted APIs are desirable for a application platform, these components can and should be wrapped by components that provide the necessary interfaces.

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
