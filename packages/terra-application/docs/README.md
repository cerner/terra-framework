# Terra Application

The `terra-application` package provides a baseline of functionality for applications built with Terra components.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-application`

## Usage

The `terra-application` package has two main responsibilities:
* It provides `<Application />`, a component that provides a baseline of functinality for applications built with Terra components.
* It aggregates Terra's framework packages that provide Context-based APIs or must otherwise be consumed as singleton packages.

### The `<Application />` Component

The `<Application />` component itself is an aggregate of a few different components, namely `terra-base`, `terra-theme-provider`, and `terra-breakpoints`. When a component is wrapped in an `Application`, it is being wrapped by `Base`, `ThemeProvider`, and `ActiveBreakpointProvider`.

```jsx
import Application from 'terra-application';

const Example = () => (
  <Application
    locale="en-US"
  >
    <ExampleContent />
  </Application>
)
```

Only a single `<Application />` component should be rendered within a given application. All Terra components should be rendered within the `<Application />` component to ensure they have access to the framework features.

### Breakpoints

The `terra-breakpoints` package uses Context to broadcast changes to the currently active window breakpoint. The `terra-breakpoints` functionality is exported from `terra-application` to limit the potential for version clashes across components that would result in a communication breakdown.

All of the exports from the `terra-breakpoints` package are exported from `terra-application` from the `/lib/breakpoints` directory.

```jsx
import breakpoints, 
{ 
  activeBreakpointForSize,
  breakpointIsActiveForSize,
  ActiveBreakpointContext,
  ActiveBreakpointProvider,
  withActiveBreakpoint,
} from 'terra-application/lib/breakpoints';
```

Any component rendered within an `<Application />` can get access to the currently active breakpoint by using the ActiveBreakpointContext.

```jsx
import Application from 'terra-application';
import { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';

const ExampleContent = () => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  return <p>The active breakpoint is: {activeBreakpoint}</p>;
}

export default () => (
  <Application
    locale="en-US"
  >
    <ExampleContent />
  </Application>
)
```

> The `terra-breakpoints` package should not be consumed directly. The functionality provided by `terra-breakpoints` should be consumed through `terra-application`.

### Disclosure Manager

The `terra-disclosure-manager` package uses Context to provide its progressive disclosure APIs to its children. The `terra-disclosure-manager` functionality is exported from `terra-application` to limit the potential for version clashes across components that would result in a communication breakdown.

All of the exports from the `terra-disclosure-manager` package are exported from `terra-application` from the `/lib/disclosure-manager` directory.

```jsx
import DisclosureManager, 
{ 
  withDisclosureManager, 
  disclosureManagerShape, 
  DisclosureManagerContext, 
  DisclosureManagerDelegate,
} from 'terra-application/lib/disclosure-manager';
```

The `<Application />` component does not provide a default DisclosureManager implementation to handle progressive disclosure. However, any components that need to consume `terra-disclosure-manager` should do so through `terra-application`.

```jsx
import Application from 'terra-application';
import { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';

const DisclosedContent = () => {
  const disclosureManager = React.useContext(DisclosureManagerContext);

  return (
    <button
      onClick={() => {
        disclosureManager.dismiss();
      }}
    >
      Dismiss Disclosure
    </button>
  );
}


const ExampleContent = () => {
  const disclosureManager = React.useContext(DisclosureManagerContext);

  return (
    <button
      onClick={() => {
        disclosureManager.disclose({
          preferredType: 'modal',
          size: 'large',
          content: {
            key: 'my-disclosed-content',
            content: <DisclosedContent />,
          }
        })
      }}
    >
      Show Disclosure
    </button>
  );
}

export default () => (
  <Application
    locale="en-US"
  >
    <ModalManager>
      <ExampleContent />
    </ModalManager>
  </Application>
)
```


> The `terra-disclosure-manager` package should not be consumed directly. The functionality provided by `terra-disclosure-manager` should be consumed through `terra-application`.


## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
