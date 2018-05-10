# Terra Navigation Layout

The `NavigationLayout` is a configuration-based, `react-router`-driven layout. It wraps the `Layout` component provided by `terra-layout` and injects routing-based components into its various component regions. If navigation is not desired, the `Layout` component can and should be used directly. However, the NavigationLayout does support very basic navigation workflows with minimal configuration required.

The `NavigationLayout` is able to successfully render with just the config object defining its structure. However, custom components can be provided directly to the NavigationLayout for the `header`, `menu`, and `content` props. Those custom components will be provided with any relevant configuration data to allow them to render things as they see fit.

#### Prerequisites
* The `NavigationLayout` must have a `Router` (or other high-level router like `BrowserRouter`, `HashRouter`, or `MemoryRouter`) as a component ancestor.
* A configuration prop must be supplied to the `NavigationLayout` that defines the desired routing setup. The `NavigationLayout` treats this prop as immutable for caching and performance reasons. If a configuration object is changing due to a state change in a higher component, a new object instance must be provided for those changes to take effect.

#### Configuration API

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

#### RoutingStackDelegate

All components rendered within the `NavigationLayout` receive a `routingStackDelegate` prop. This prop contains the following attributes:
* `location` - The location used to render the component. This can be used to build NavLinks or other components that might desire the current location.
* `parentPaths` - An array of String paths that were determined to preceed the current path in the configuration. For example, if the routes `/pages`, `/pages/:id`, and `/pages/:id/summary` were defined by the config, the component rendered for the path `/pages/123/summary` would receive a parentPaths value of [`/pages`, `/pages/123`]. This set of paths could be used to build breadcrumbs or simple navigation functionality.

Components within the `menu` region get a few extra features, however. To help enable nested menu scenarios, the `routingStackDelegate` will also include the following:
* `show` - A function that will cause the NavigationLayout to display the menu for the given path. If the given path does not match the current history location, the new location is pushed onto the history stack. If the given path already matches the current history location, only the RoutingStack's internal location is updated; this insures that the history is not being manipulated unnecessarily when navigating down the stack of menu components.
* `showParent` - A function that will cause the NavigationLayout to display the immediate parent path (if one is present).
* `showRoot` - A function that will cause the NavigationLayout to display the first (or root) parent path (if one is present, and the number of parent paths is more than 1).

It is important to note that `showParent`/`showRoot` change the location used by the menu components, but they do not change the location of the overall page. For example, if the page location is `/pages/99/summary`, and the menu component calls `showParent`, the menu component for `/pages/99` will be rendered, but the content component for `/pages/99/summary` will still be rendered, and the browser URL will still be `[base-url]/pages/99/summary`.

After calling these navigation functions, the `location` provided in the `routingStackDelegate` match the parent path specified. If the true page location is still necessary, the `withRouter` HOC provided by `react-router` can be utilized as needed. And if this functionality is not desired at all for a given application, these props can be safely ignored.

##### refuseRoutingStackNavigation

The configuration API supports an additional key for each component specification called `refuseRoutingStackNavigation` that will prevent the associated component from appearing in parentPaths and will disallow navigation to it through the `showParent`/`showRoot`. A component with `refuseRoutingStackNavigation` set to `true` will only be presented if the current location matches its route. This is an advanced option that can be used to better control menu-based workflows.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-navigation-layout`

