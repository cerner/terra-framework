# Terra Navigation

The Terra Navigation package includes a variety of components and utilities to provide configuration-based, `react-router`-driven navigation to your Terra applications.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-navigation`
  - `yarn add terra-navigation`

## Usage

```jsx
import React from 'react';
import NavigationLayout from 'terra-navigation';

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
