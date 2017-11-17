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

import ApplicationHeader from './examples/ApplicationHeader';

import ApplicationMenu from './examples/ApplicationMenu';
import ApplicationContent from './examples/ApplicationContent';
import ApplicationMenu from './examples/ApplicationMenu';

import Page1Menu from './examples/Page1Menu';
import Page2Menu from './examples/Page2Menu';
import Page1Content from './examples/Page1Content';
import Page1Subcontent from './examples/Page1Subcontent';
import Page2Content from './examples/Page2Content';

/**
 * This configuration will result in:
 * - An ApplicationHeader component rendered in the NavigationLayout's `header` region.
 * - An ApplicationMenu component rendered in the NavigationLayout's `menu` region.
 * - An ApplicationContent component rendered in the NavigationLayout's `content` region.
 */
const basicConfig = {
  header: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: ApplicationHeader,
        },
      },
    },
  },
  menu: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: ApplicationMenu,
        },
      },
    },
  },
  content: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: ApplicationContent,
        },
      },
    },
  },
};

const config = {
  header: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: ApplicationHeader,
        },
      },
    },
  },
  menu: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: ApplicationMenu,
        },
      },
      children: {
        '/page1' : {
          path: '/page1',
          component: {
            default: {
              componentClass: Page1Menu,
            },
            large: {
              componentClass: Page1Menu,
              props: {
                displayType: 'large',
              }
            },
            huge: {
              componentClass: Page1Menu,
              props: {
                displayType: 'huge',
              }
            }
          },
        },
        '/page2' : {
          path: '/page2',
          component: {
            tiny: {
              componentClass: Page2Menu,
            },
            small: {
              componentClass: Page2Menu,
            },
          },
        },
      }
    },
  },
  content: {

  }
}

const ExampleApp = () => (
  <Router>
    <Route
      render={() => (
        <Base>
          <NavigationLayout
            menuText="Menu"
            indexRoute="/"
            config={config}
          />
        </Base>
      )}
    />
  </Router>
);

```
