# Terra App Delegate

The AppDelegate is an object that provides a set of functions used to facilitate communcation between Containers and
their consuming Containers/Applications.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-app-delegate`

## Usage

```js
import AppDelegate from 'terra-app-delegate';

const newAppDelegateInstance = AppDelegate.create({
  disclose: (data) => {
    // Perform disclose action (open modal, inline panel, etc.)
  },
  dismiss: (data) => {
    // Dismiss current Container
  },
  closeDisclosure: (data) => {
    // Close entire disclosure method, regardless of other content
  },
  goBack: (data) => {
    // Dismiss current Container
  },
  maximize: (data) => {
    // Maximize the disclosure method
  },
  minimize: (data) => {
    // Minimize the disclosure method
  },
  releaseFocus: (data) => {
    // The calling component is releasing focus.
  },
  requestFocus: (data) => {
    // The calling component is requesting to gain focus.
  },
  registerDismissCheck: (checkFunction) => {
    // The calling component is registering a function to be called
    // before the component is dismissed.
  }
});

const clonedAppDelegateInstance = AppDelegate.clone(newAppDelegateInstance, {
  disclose: (data) => {
    // Override disclose function from newAppDelegateInstance
  },
});

```


The implementations of the AppDelegate APIs are completely determined by the component creating the AppDelegate instance. However,
the suggested use of each function is as follows:

|Name|Status|Description|
|---|---|---|
|`disclose`|Required|Used to progressively disclose content in various ways (modal, inline, etc.)|
|`dismiss`|Optional|Used to remove the calling component from the application. Dismiss may additionally close the calling component's disclosure mechanism. Dismiss should only be present if the component is dismissible (i.e. presented within a disclosure mechanism).|
|`closeDisclosure`|Optional|Used to close the calling component's disclosure mechanism. Should only be present if the component is presented within a disclosure mechanism.|
|`goBack`|Optional|Used to dismiss the calling component. Should only be present if the ability to go back is available (for example, due to a navigation structure present in the disclosure mechanism).|
|`maximize`|Optional|Used to maximize the calling component. Should only be present if the disclosure method is maximizable and not currently maximized.|
|`minimize`|Optional|Used to minimize the calling component. Should only be present if the disclosure method is minimizable and not currently minimized.|
|`releaseFocus`|Optional| The calling component, typically a popup or date picker component that can display over the container, is ready to release focus so that other components can gain focus.|
|`requestFocus`|Optional| The calling component, typically a popup or date picker component that can display over the container, is requesting to gain focus.|
|`registerDismissCheck`|Optional|Used to register a function to be called before the component is dismissed. The function can be used as an indication that the component will be dismissed, or it can actually block the dismissal if it returns a rejected Promise.|

### Disclose Argument API

The disclosure function has an extensible Object-based API to support a variety of disclosure types.

Disclose API:

|Key|Type|Description|
|---|---|---|
|preferredType|String|A String describing the component's desired disclosure method. This may or may not be honored, depending on the consuming Application's configuration.|
|content|Object|An Object containing data describing the component that is to be disclosed.|

Disclose Content API:

|Key|Type|Required|Description|
|---|---|---|---|
|`key`|String|Yes|An identifying String that will be used as the React `key` for the disclosed component. This must be unique relative to the other disclosure components, so make this as specific as possible.|
|`component`|React Element|No|A React component instance that will be disclosed. If provided, the name/props values will be ignored.|
|`name` (deprecated)|String|No|The String value that will be used to retrieve the Component class from the AppDelegate component registry.|
|`props` (deprecated)|Object|No|An Object containing the props for the disclosed component. These should be serializable.|

An example implementation would look like this:

```jsx
// ExampleDisclosureComponent.jsx

import AppDelegate from 'terra-app-delegate';

const ExampleDisclosureComponent = () => {
  // This is the component that will be disclosed.
};

ExampleDisclosureComponent.propTypes = {
  prop1: ...,
  prop2: ...,
}

export default ExampleDisclosureComponent;

```

```jsx
// ExampleRootComponent.jsx

import AppDelegate from 'terra-app-delegate';
import ExampleDisclosureComponent from './ExampleDisclosureComponent';

class ExampleRootComponent extends React.Component {
  discloseComponent() {
    this.props.app.disclose({
      preferredType: 'modal',
      content: {
        key: `COMPONENT-${CONCEPT_IDENTIFIER_HERE}`,
        component: <ExampleDisclosureComponent prop1="value" prop2="another value" />
      },
    })
  }

  render() {}
}

ExampleRootComponent.propTypes = {
  app: AppDelegate.propType,
}

```

### Deprecated APIs

The Disclose API for specifying which component to present was previously structured to support Redux-based disclosure managers. However, the disclosure managers were transitioned away from Redux to allow consumers to have greater control over the disclosure lifecycle. Therefore, the `name` and `props` keys in the disclose API are now deprecated, and the `component` key should be used to provide a component instance to present instead. This also means that the `registerComponentForDisclosure`/`getComponentForDisclosure` are deprecated as well, as there is no need for component retreival when an instance is given through the API. Those APIs will continue to function, but the usage of the `component` key is recommended.
