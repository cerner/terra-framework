# Terra Navigation Layout

The Terra Navigation Layout package includes a variety of components and utilities to provide configuration-based, `react-router`-driven navigation to Terra applications.

### Components

This package includes a number of React components that can be used individually in existing applications or in custom implementations.

#### NavigationLayout

The `NavigationLayout` wraps the `Layout` component provided by `terra-layout` and injects routing-based components within its various component regions. If navigation is not desired, the `Layout` component can and should be used directly. However, the NavigationLayout does support very basic navigation workflows with minimal configuration required.

##### Prerequites
* The `NavigationLayout` must have a `Router` (or other high-level router like `BrowserRouter` or `HashRouter`) as a component ancestor.
* A configuration object must be supplied to the `NavigationLayout` that defines the desired routing setup.

#####

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
