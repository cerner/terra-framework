# Terra Navigation Layout

The Terra Navigation Layout package includes a variety of components and utilities to provide configuration-based, `react-router`-driven navigation to Terra applications.

### Components

This package includes a number of React components that can be used together or individually in existing applications or in custom implementations. `react-router` is heavily used; please refer to their documentation for more information regarding their standard routing components: https://reacttraining.com/react-router/

#### NavigationLayout

The `NavigationLayout` wraps the `Layout` component provided by `terra-layout` and injects routing-based components within its various component regions. If navigation is not desired, the `Layout` component can and should be used directly. However, the NavigationLayout does support very basic navigation workflows with minimal configuration required.

##### Prerequisites
* The `NavigationLayout` must have a `Router` (or other high-level router like `BrowserRouter`, `HashRouter`, or `MemoryRouter`) as a component ancestor.
* A configuration object must be supplied to the `NavigationLayout` that defines the desired routing setup.

#### RoutingStack

The `RoutingStack` uses the NavigationLayout configuration to render a routing `Switch` with child `Routes` based on the configuration. If the configuration has child routes specified, the `RoutingStack` will render the child routes in the `Switch` first to ensure that partial location matches do not take precedent over full matches.

For example, if the routing configuration for the `RoutingStack` looks like:
```js
{
  '/': {
    path: '/',
    component: {
      default: {
        componentClass: RootComponent,
      },
    },
    children: {
      '/a': {
        path: '/a',
        component: {
          default: {
            componentClass: AComponent,
          },
        },
        children: {
          '/a/b': {
            path: '/a/b',
            component: {
              default: {
                componentClass: BComponent,
              },
            },
          },
        },
      },
    },
  },
}
```

The `RoutingStack` will render something like:
```jsx
<Switch>
  <Route path="/a/b" component={BComponent} />
  <Route path="/a" component={AComponent} />
  <Route path="/" component={RootComponent} />
</Switch>
```

Because the `Switch` renders the first matching route and ignores the rest, if the configuration was not inverted within it, the path `/a/b` would match against `/` and `RootComponent` would be rendered for every route.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-navigation-layout`
  - `yarn add terra-navigation-layout`

## Usage

```jsx
import React from 'react';
import NavigationLayout from 'terra-navigation-layout';

const config = {
  // Configuration should feature routing definitions for header, menu, and
  // content regions.
};

const ExampleApp = () => (
  <Router>
    <Base>
      <NavigationLayout
        menuText="Menu"
        indexRoute="/"
        config={config}
      />
    </Base>
  </Router>
);

```
