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

The `RoutingStack` renders a routing `Switch` with child `Routes` based on the `NavigationLayout` configuration API. If the configuration has child routes specified, the `RoutingStack` will render the child routes in the `Switch` first to ensure that partial location matches do not take precedent over full matches.

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

#### Configuration API

The configuration object is structured like:
```js
{
  // The routes specified under the `header` key will be generated in the Layout's `header` region.
  // The configuration shape under each key is the same.
  header: {
    // At this level of the configuration, we're defining each path to which we want to match.
    // The key here doesn't have to be a path (the actual path used is specified within), but generally it
    // makes sense to use the path as the key as they should be unique anyway.
    // Each sibling item at this level should be tangental: /page1, /page2, etc.
    // If you have route defined like '/page1, /page1/item1' where multiple matches are possible, you need
    // may need to specify the exact or strict options to achieve the rendering you desire.
    '/': {
      path: '/',
      // exact: true,   If necessary, you can define the routes to be exact or strict here
      // strict: true,
      component: {
        // At this level, we get access to the configuration's responsive API.
        // The keys at this level must be either `default` or one of our supported breakpoints (`tiny`, `small`, `medium`, `large`, `huge`)
        // If you specify a component for `default`, it will be rendered for any size that isn't overridden.
        // If you do not specify a `default` component, any size that has no defined component will simply not be rendered.
        default: {
          componentClass: HeaderExample,
          props: {
            headerTitle: 'Title From Config' // The `props` defined are applied to the given componentClass when instantiated.
          },
        },
        // We're going to provide a separate configuration for the `huge` breakpoint that has a different prop value.
        // While we're just changing the prop value, we could add props, remove them, or provide a different componentClass entirely.
        huge: {
          componentClass: HeaderExample,
          props: {
            headerTitle: 'Long Title From Config Because There Is Lots of Space (Cause The Size Is Huge)'
          },
        },
      },
    },
  },
  // The routes specified under the `menu` key will be generated in the Layout's `menu` region
  menu: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: MenuExample,
        },
      },
      children: {
        // You can also provide child route configurations. When routes are specified as children, the routing components
        // know to render the child routes first to prevent undesired matches. See the RoutingStack documentation for more information.
        //
        // Specifically for the menu configuration, the RoutingStack exposes silent navigation within a given route tree, allowing users to
        // navigate to parent menus without changing the actual page location. In this case, the Page1Menu when rendered will have access to
        // a function that will present the MenuExample.
        '/page1': {
          path: '/page1',
          component: {
            default: {
              componentClass: Page1Menu,
            },
          },
        },
      },
    },
  },
  // The routes specified under the `content` key will be generated in the Layout's `content` region
  content: {
    '/page1': {
      path: '/page1',
      component: {
        default: {
          componentClass: Page1Content,
        },
      },
    },
  },
}
```

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-navigation-layout`
  - `yarn add terra-navigation-layout`

## Usage

```jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavigationLayout from 'terra-navigation-layout';

const config = {
  // Configuration should feature routing definitions for header, menu, and
  // content regions.
};

const ExampleApp = () => (
  <BrowserRouter>
    <Base>
      <NavigationLayout
        menuText="Menu"
        indexRoute="/"
        config={config}
      />
    </Base>
  </BrowserRouter>
);
```
