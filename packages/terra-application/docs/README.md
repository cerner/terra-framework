# Terra Application

The `terra-application` package contains the components that comprise Terra's application platform.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-application`

## Usage

The `terra-application` package should be used both by application and library (i.e. reusable) packages to provide consistent functionality for their applications/components.

An application and its dependencies must all depend upon the same version of `terra-application`. This necessitates a degree of orchestration between application and library developers, but `terra-application` allows that orchestration to focus on a single package instead of Terra's entire suite of framework components.

Application packages must specify `terra-application` as a **dependency**.  Library packages must specify `terra-application` as a **peerDependency** (and a **devDependency** to resolve dependencies during development). These guidelines are intended to prevent the duplication of `terra-application` in webpack bundles. Bundling multiple versions of `terra-application`, or even multiple instances of the *same* version, will result in undefined and undesired behavior. Under these guidelines, if an application attempts to consume a library package that has a dependency on a different version of `terra-application`, an unmet peer dependency warning will be emitted during npm package installation. While only a warning, this warning indicates a major problem and will result in a non-functional application.

> Note: Packages of the same version can be duplicated when using `npm link` or local `file:..` references during development. In these scenarios, an alias can be defined in the webpack configuration to force a single package instance to be used by the application. Alternatively, installing a development package using a `git:` reference should not duplicate the package.

## Features

### ApplicationBase

The `<ApplicationBase />` component provides the baseline functionality an application and its contents expect and require. When a component is rendered within `<ApplicationBase />`, the component gets access to the i18n, theme, and breakpoint information it needs to render appropriately.

Applications should render `<ApplicationBase />` at or near the root of their component tree. Conversely, libraries should develop their components with the assumption that those components will be rendered within a`<ApplicatioBase />` component by an application. Libraries should not (outside of tests) render an `<ApplicationBase />` component.

```jsx
import ApplicationBase from 'terra-application/lib/application-base';

const Example = () => (
  <ApplicationBase
    locale="en-US"
  >
    <ExampleContent />
  </ApplicationBase>
)
```

Only a single `<ApplicationBase />` component should be rendered within a given application. All Terra components should be rendered within the `<ApplicationBase />` component to ensure they have access to the framework features.

### Breakpoints

The `terra-breakpoints` package uses Context to broadcast information about the currently active window breakpoint. The `terra-breakpoints` functionality is exported from `terra-application` to limit the potential for version clashes across components that would result in a communication breakdown.

All of the exports from the `terra-breakpoints` package are exported from the `/lib/breakpoints` directory.

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

A Sass partial containing media query mixins based on the defined breakpoints is also available.

```scss
@import '~terra-application/lib/breakpoints/media-queries';

.example {
  color: blue;

  @include terra-mq-small-up {
    color: red;
  }
}
```

> The `terra-breakpoints` package should not be consumed directly. The functionality provided by `terra-breakpoints` should be consumed through `terra-application`.
> An `ActiveBreakpointProvider` is rendered automatically by the `Application` component.

### Disclosure Manager

The `terra-disclosure-manager` package uses Context to provide its progressive disclosure APIs to its children. The `terra-disclosure-manager` functionality is exported from `terra-application` to limit the potential for version clashes across components that would result in a communication breakdown.

All of the exports from the `terra-disclosure-manager` package are exported from the `/lib/disclosure-manager` directory.

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

### ModalManager

The `terra-modal-manager` package uses `terra-disclosure-manager` to manage the disclosure of a modal.

All of the exports from the `terra-modal-manager` package are exported from the `/lib/modal-manager` directory.

```jsx
import ModalManager from 'terra-application/lib/modal-manager';
```

> The `terra-modal-manager` package should not be consumed directly. The functionality provided by `terra-modal-manager` should be consumed through `terra-application`.

### SlidePanelManager

The `terra-slide-panel-manager` package uses `terra-disclosure-manager` to manage the disclosure of a slide panel.

All of the exports from the `terra-slide-panel-manager` package are exported from the `/lib/slide-panel-manager` directory.

```jsx
import SlidePanelManager from 'terra-application/lib/slide-panel-manager';
```

> The `terra-slide-panel-manager` package should not be consumed directly. The functionality provided by `terra-slide-panel-manager` should be consumed through `terra-application`.

### NavigationPrompt

The `terra-navigation-prompt` package uses Context to communicate the presence of unsaved data between components.

All of the exports from the `terra-navigation-prompt` package are exported from the `/lib/navigation-prompt` directory.

```jsx
import NavigationPrompt, { 
  NavigationPromptCheckpoint, 
  PromptRegistrationContext 
} from 'terra-application/lib/navigation-prompt';
```

> The `terra-navigation-prompt` package should not be consumed directly. The functionality provided by `terra-navigation-prompt` should be consumed through `terra-application`.

## Example

```json
// example-application/package.json
{
  "name": "example-application",
  "dependencies": {
    "terra-application": "^1.0.0",
    "example-library": "^1.0.0",
  }
}
```

```jsx
// example-application/src/index.jsx
import Application from 'terra-application';
import ModalManager from 'terra-application/lib/modal-manager';
import Content from 'example-library';

const ExampleApplication = () => (
  <Application
    locale="en"
  >
    <ModalManager>
      <Content />
    </ModalManager>
  </Application>
);

export default ExampleApplication;
```

```json
// example-library/package.json
{
  "name": "example-library",
  "peerDependencies": {
    "terra-application": "^1.0.0"
  },
  "devDependencies": {
    "terra-application": "^1.0.0"
  }
}
```

```jsx
// example-library/src/index.jsx
import { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';
import { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';
import { injectIntl } from 'react-intl';

const Content = injectIntl(({ intl }) => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);
  const disclosureManager = React.useContext(DisclosureManagerContext);

  return (
    <div>
      <p>The active breakpoint is {activeBreakpoint}.</p>
      <p>Translated message: {intl.formatMessage({ id: 'example.string' })}</p>
      <button
        onClick={() => {
          disclosureManager.disclose({...});
        }}
      >
        Open Modal
      </button>
    </div>
  );
});

export default Content;
```

## Component Features

- [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
- [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
- [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
