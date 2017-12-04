# Terra Navigation Layout

The Terra Navigation Layout package includes a variety of components and utilities to provide configuration-based, `react-router`-driven navigation to Terra applications.

### Components

This package includes a number of React components that can be used together or individually in existing applications or in custom implementations. `react-router` is heavily used; please refer to their documentation for more information regarding their standard routing components: https://reacttraining.com/react-router/

#### NavigationLayout

The `NavigationLayout` wraps the `Layout` component provided by `terra-layout` and injects routing-based components within its various component regions. If navigation is not desired, the `Layout` component can and should be used directly. However, the NavigationLayout does support very basic navigation workflows with minimal configuration required.

The `NavigationLayout` is able to successfully render with just the config object defining its structure. However, custom components can be provided directly to the NavigationLayout for the `header`, `menu`, and `content` props. Those custom components will be provided with any relevant configuration data to allow them to render things as they see fit.

##### Prerequisites
* The `NavigationLayout` must have a `Router` (or other high-level router like `BrowserRouter`, `HashRouter`, or `MemoryRouter`) as a component ancestor.
* A configuration prop must be supplied to the `NavigationLayout` that defines the desired routing setup. The `NavigationLayout` treats this prop as immutable for caching and performance reasons. If a configuration object is changing due to a state change in a higher component, a new object instance must be provided for those changes to take effect.

##### Configuration API

The configuration object is structured like the below example. A couple key takeaways:
* The `header`, `menu`, and `content` regions have a separate configurations but share the same configuration APIs. These can be omitted if routing is unnecessary for an individual section.
* The configuration can be responsive and supports specifying components on a per-route, per-breakpoint basis.
* Routes can be provided in any order; however, the NavigationLayout will sort them as necessary to ensure the expected render order is maintained.
* Proptypes for the various pieces of the configuration object are exported by the `configurationPropTypes.js` file.

```js
{
  /**
   * The menu, content, and header configurations are keyed at the root of the object.
   */
  menu: {
    /**
     * At this level of the configuration, we're defining each path to which we want to match.
     * The key here doesn't have to be a path (the actual path used is specified within), but generally it
     * makes sense to use the path as the key as they need to be unique anyway.
     */
    '/': {
      path: '/',
      component: {
        /**
         * Here we get access to the configuration's responsive API.
         * The keys at this level must be either `default` or one of our supported breakpoints (`tiny`, `small`, `medium`, `large`, `huge`)
         * If you specify a component for `default`, it will be rendered for any size that isn't overridden.
         * If you do not specify a `default` component, any size that has no defined component will simply not be rendered.
         */
        default: {
          componentClass: MenuExample,
          props: {
            menuTitle: 'Title From Config' // The `props` are applied to the given componentClass when instantiated.
          },
        },
        /**
         * We're going to provide a separate configuration for the `huge` breakpoint that has a different prop value.
         * While we're just changing the prop value, we could add props, remove them, or provide a different componentClass entirely.
         */
        huge: {
          componentClass: MenuExample,
          props: {
            menuTitle: 'Long Title From Config Because There Is Lots of Space (Cause The Size Is Huge)'
          },
        },
      },
    },
    '/page1': {
      /*
       * Now a component for the route /page1 is being defined. This path is a descendent of the route above (/), so when the
       * page location matches '/page1', the Page1Menu will be rendered instead of the MenuExample.
       */
      path: '/page1',
      component: {
        default: {
          componentClass: Page1Menu,
        },
      },
    },
    '/page1/subpage1': {
      /*
       * Similarly, this route is a descendent of /page1 and will take precedent over it when the location matches. The order of these configurations
       * are not important, as the NavigationLayout will determine the parent-child relationships and render things accordingly.
       */
      path: '/page1/subpage1',
      component: {
        default: {
          componentClass: Subpage1Menu,
        },
      },
    }
  },
  content: {...}, // The configuration shape for the content and header sections is the same as that of the menu section.
  header: {...},
}
```

#### RoutingStack

The `RoutingStack` renders a routing `Switch` with child `Routes` based on the `NavigationLayout`'s configuration. It is used internally by the `NavigationLayout` but can be used outside of it.

The `RoutingStack` also includes optional navigation managment within the component. For example, given the example configuration above, the RoutingStack would determine the `/page1/subpage1` route to have two parent routes: `/page1` and `/`. If the `navEnabled` prop is provided to the `RoutingStack`, the component defined for the `page1/subpage1` route will be provided with a `RoutingStackDelegate` instance as a prop. This prop will include:
* The current location of the RoutingStack (as `location`)
* The parent paths as determined by the current page location (as `parentPaths`)
* A function that will change the `RoutingStack`'s internal location to that of the next parent route (as `showParent`)
* A function that will change the `RoutingStack`'s internal location to that of the root (or last) parent route (as `showRoot`)

It is important to note that calling `showParent`/`showRoot` does not affect the actual page location, just that of the `RoutingStack` instance. This allows components to step back through nested route content without loosing context of other content on the page. This is typically used for menus or other components that are supplementing the main page content. In fact, the NavigationLayout only enabled navigation within the RoutingStack used to display the Layout's `menu` components.

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
