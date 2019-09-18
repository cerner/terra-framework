# Terra Application

The `terra-application` package contains the components that comprise Terra's application platform.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-application`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |

<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

The `terra-application` package can be used by React-based application and library packages to provide a consistent set of features for their applications/components.

An application and its dependencies must all depend upon the same version of `terra-application`. This requires a level of orchestration between application and library owners, but `terra-application` allows that effort to focus on a single package instead of Terra's entire suite of framework components.

Application packages must specify `terra-application` as a **dependency**. Library packages must specify `terra-application` as a **peerDependency** (and a **devDependency** to resolve dependencies during development). These guidelines are intended to prevent the duplication of `terra-application` assets in webpack bundles. Bundling multiple versions of `terra-application`, or even multiple instances of the *same* version, will result in undefined and undesired behavior. Under these guidelines, if an application attempts to consume a library package that has a dependency on a different version of `terra-application`, an unmet peer dependency warning will be emitted during npm package installation. While only a warning, this warning indicates a major problem and will result in a non-functional application.

> Note: Packages of the same version may inadvertently be duplicated when using `npm link` or local `file:..` references during development. In these scenarios, an alias can be defined in the webpack configuration to force a single package instance to be used by the application. Alternatively, installing a development package using a `git:` reference should not duplicate the package.

## Features

### ApplicationBase

The `ApplicationBase` component provides the baseline functionality that an application and its contents require. It renders the following components:

- `<Base />` (from `terra-base`)
  - The `Base` component provides global style resets and renders an `IntlProvider` component. The `IntlProvider` component exposes its children to translated strings for the declared locale. Please see the documentation for the `terra-base` component for more information.
- `<ThemeProvider />` (from `terra-theme-provider`)
  - The `ThemeProvider` component provides themed styles to the components rendered within it.
- `<ActiveBreakpointProvider />` (from `terra-breakpoints`)
  - The `ActiveBreakpointProvider` component exposes its children to the breakpoint value attributed to the current viewport size. See the `Breakpoints` section below for more information.
- `<ApplicationErrorBoundary />`
  - The `ApplicationErrorBoundary` component renders a styled error view if components within it throw exceptions during the React render lifecycle.
- `<ApplicationLoadingOverlayProvider />`
  - The `ApplicationLoadingOverlayProvider` component provides its children with APIs to present loading overlays within the application framework.

Applications should render `ApplicationBase` at the root of their component tree and around all application contents. Conversely, libraries should not (outside of tests) render an `ApplicationBase` component. Libraries should instead develop their components with the assumption that those components will be rendered within a`ApplicationBase` component by an application.

Only a single `ApplicationBase` component should be rendered within a given application. All Terra components should be rendered within a `ApplicationBase` component to ensure that they have access to necessary platform features.

### I18n

Terra components leverage the [react-intl](https://www.npmjs.com/package/react-intl) project to load and render translated strings. Please see the terra-base and react-intl [documentation](https://github.com/formatjs/react-intl/tree/master/docs) for more information.

> Remember: `ApplicationBase` configures and renders react-intl's `IntlProvider` internally (through `<Base />`). An `IntlProvider` should not be rendered directly.

### Breakpoints

`terra-application` includes components that determine and broadcast an application's responsive breakpoint state.

Breakpoints within Terra are defined as follows:

|Breakpoint Name|Minimum Value|Equivalent Media Query|Description|
|---|---|---|---|
|`tiny`|0px|`@media screen and (min-width: 0px)`|Active from viewport width 0px and up |
|`small`|544px|`@media screen and (min-width: 544px)`|Active from viewport width 544px and up|
|`medium`|768px|`@media screen and (min-width: 768px)`|Active from viewport width 768px and up|
|`large`|992px|`@media screen and (min-width: 992px)`|Active from viewport width 992px and up|
|`huge`|1216px|`@media screen and (min-width: 1216px)`|Active from viewport width 1216 and up|
|`enormous`|1440px|`@media screen and (min-width: 1440px)`|Active from viewport width 1440px and up|

The following exports can be imported from the `terra-application/lib/breakpoints` package directory:

#### `breakpoints`

An Object containing minimum applied value for the named breakpoints.

```jsx
import breakpoints from 'terra-application/lib/breakpoints';

console.log(breakpoints.tiny);     // Output: 0
console.log(breakpoints.small);    // Output: 544
console.log(breakpoints.medium);   // Output: 768
console.log(breakpoints.large);    // Output: 992
console.log(breakpoints.huge);     // Output: 1216
console.log(breakpoints.enormous); // Output: 1440
```

#### `ActiveBreakpointProvider`/`ActiveBreakpointContext`

The `ActiveBreakpointProvider` determines the currently active breakpoint and communicates it to its children using the `ActiveBreakpointContext`.

> Remember: An `ActiveBreakpointProvider` is rendered internally by the `ApplicationBase` component. The `ActiveBreakpointProvider` component should not be rendered directly.

```jsx
import { useContext } from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';

const ExampleContent = () => {
  const activeBreakpoint = useContext(ActiveBreakpointContext);

  return <p>The active breakpoint is: {activeBreakpoint}</p>;
}

export default () => (
  <ApplicationBase
    locale="en-US"
  >
    <ExampleContent />
  </ApplicationBase>
)
```

In addition to the JS utilities, a Sass partial containing media query mixins based on the defined breakpoints is also available.

```scss
@import '~terra-application/lib/breakpoints/media-queries';

.example {
  color: blue;

  @include terra-mq-small-up {
    color: red;
  }

  @include terra-mq-medium-up {
    color: purple;
  }

  @include terra-mq-large-up {
    color: green;
  }

  @include terra-mq-huge-up {
    color: yellow;
  }

  @include terra-mq-enormous-up {
    color: orange;
  }
}
```

Please see the documentation for the `terra-breakpoints` package for more information.

### Progressive Disclosure

`terra-application` provides components that manage progressively disclosed application content.

#### `DisclosureManager`

The `DisclosureManager` defines a generalized API for managing progressively disclosed application content.

Please see the documentation for the `terra-disclosure-manager` package for detailed API information. All of the exports from the `terra-disclosure-manager` package are exported from the `terra-application/lib/disclosure-manager` directory.

```jsx
import DisclosureManager,
{
  withDisclosureManager,
  disclosureManagerShape,
  DisclosureManagerContext,
  DisclosureManagerDelegate,
} from 'terra-application/lib/disclosure-manager';
```

> Remember: `terra-application` repackages the contents of the `terra-disclosure-manager` package to help maintain version/instance consistency. The `terra-disclosure-manager` package should not be consumed directly if `terra-application` is also being consumed.

#### `ModalManager`

The `ModalManager` is an implementation of the `DisclosureManager` that renders progressively disclosed content within a modal.

Please see the documentation for the `terra-modal-manager` package for detailed API information. All of the exports from the `terra-modal-manager` package are exported from the `terra-application/lib/modal-manager` directory.

```jsx
import ModalManager from 'terra-application/lib/modal-manager';
```

> Remember: `terra-application` repackages the contents of the `terra-modal-manager` package to help maintain version/instance consistency. The `terra-modal-manager` package should not be consumed directly if `terra-application` is also being consumed.

#### `SlidePanelManager`

The `SlidePanelManager` is an implementation of the `DisclosureManager` that renders progressively disclosed content within a SlidePanel (as provided by `terra-slide-panel`).

Please see the documentation for the `terra-slide-panel-manager` package for detailed API information. All of the exports from the `terra-slide-panel-manager` package are exported from the `terra-application/lib/slide-panel-manager` directory.

```jsx
import SlidePanelManager from 'terra-application/lib/slide-panel-manager';
```

> Remember: `terra-application` repackages the contents of the `terra-slide-panel-manager` package to help maintain version/instance consistency. The `terra-slide-panel-manager` package should not be consumed directly if `terra-application` is also being consumed.

#### Example Usage

The `ApplicationBase` component does not provide a default DisclosureManager implementation to handle progressive disclosure. The below example shows a possible implementation using the ModalManager.

```jsx
import { useContext } from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';
import ModalManager from 'terra-application/lib/modal-manager';

const DisclosedContent = () => {
  const disclosureManager = useContext(DisclosureManagerContext);

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
  const disclosureManager = useContext(DisclosureManagerContext);

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
  <ApplicationBase
    locale="en-US"
  >
    <ModalManager>
      <ExampleContent />
    </ModalManager>
  </ApplicationBase>
)
```

### User Prompting

`terra-application` includes components that allow components to warn and prompt users prior to destructive navigation events.

#### `NavigationPrompt`/`NavigationPromptCheckpoint`

The `NavigationPrompt` and `NavigationPromptCheckpoint` components define a registration pipeline between components that have transient state and the components that render them.

Please see the documentation for the `terra-navigation-prompt` package for detailed API information. All of the exports from the `terra-navigation-prompt` package are exported from the `terra-application/lib/navigation-prompt` directory.

```jsx
import NavigationPrompt, {
  NavigationPromptCheckpoint,
  PromptRegistrationContext
} from 'terra-application/lib/navigation-prompt';
```

> Remember: `terra-application` repackages the contents of the `terra-navigation-prompt` package to help maintain version/instance consistency. The `terra-navigation-prompt` package should not be consumed directly if `terra-application` is also being consumed.

## Component Features

- [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
- [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
- [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
