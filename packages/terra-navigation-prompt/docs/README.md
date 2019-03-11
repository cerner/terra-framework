# Terra Navigation Prompt

The NavigationPrompt and NavigationPromptCheckpoint components allow for the detection and management of components with unpersisted state.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-navigation-prompt`

## Rationale

A React component has complete control over its internal rendering logic. It can render child components and unrender those child components as it sees fit. It follows then that any individual component has no direct control over its own mounting and unmounting; it is rendered (or not) at the discretion of its parent. A component must rely on its lifecycle events to determine how it is being implemented.

However, a component's children can be stateful and responsible for important user input or interactions. If the user can navigate away from that child component, it may be necessary for that child component to notify the user that their workflow is incomplete or that some transient state has not yet been persisted. If the component has no control over its own unmounting, how can it communicate this state to the overall application before the component is already being unmounted?

The most straightforward solution is to lift the state up. If the state is lifted into a parent component, it can be more directly managed by the component responsible for navigation, or it could be persisted indefinitely. **This is the strategy should be implemented by most components.** However, for very large applications or highly composable applications built out of many stateful components, lifting the state may not be feasible.

The next obvious solution would be to expose callbacks from the stateful components. Whenever the components state changes, the callbacks are executed to notify the consumer of the current state. This works well at a small scale, but this becomes hard to maintain as the component tree increases in depth. One would have to chain these callbacks n-levels deep to ensure every component is kept abreast of the current state, and every component, even those without these state concerns, would have to adhere to a consistent prop interface for those callbacks.

The NavigationPrompt and the NavigationPromptCheckpoint were created smooth over the rough edges of the aforementioned strategies. Components that have unpersisted state can render a NavigationPrompt to make their state known to the application. Components that navigate between components can use the NavigationPromptCheckpoint to check for the presence of NavigationPrompts and inform the user in a consistent way. State remains localized to the component needs it, communication of state changes occurs automatically, and components that don't care about this at all can safely ignore all of it.

## Usage

### `NavigationPrompt`

When a component renders a NavigationPrompt, it telling its parent components two things: that the component is in the middle of something important, and that users may care about the component being unmounted suddenly.

The NavigationPrompt can be rendered with two props: a `description` string that gives context to the NavigationPrompt, and a `metaData` object that can be used to provide additional data points that may be relevant to the NavigationPrompt.

The NavigationPrompt can be rendered like any other component, but prop consistency should be maintained between renders when possible. Creating a new object for the `metaData` prop within a render function will cause the NavigationPrompt to deregister and reregister itself during every update:

```jsx
render() {
  return (
    <NavigationPrompt description="I am going to update every time my parent updates" metaData={{ important: 'info' }} />
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
    <NavigationPrompt description="My props are consistent between renders, so I don't have to update myself" metaData={this.state.metaDataValue} />
  );
}
```

### `NavigationPromptCheckpoint`

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
