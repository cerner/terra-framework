```js
import HeaderExample from './HeaderExample';
import MenuExample from './MenuExample';
import Page1Content from './Page1Content';
import Page2Content from './Page2Content';
import Page3Content from './Page3Content';
import Page1Menu from './Page1Menu';
import Page2Menu from './Page2Menu';

const config = {
  header: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: HeaderExample,
        },
      },
    },
  },
  menu: {
    '/': {
      path: '/',
      component: {
        tiny: {
          componentClass: MenuExample,
        },
        small: {
          componentClass: MenuExample,
        },
      },
      children: {
        '/page1': {
          path: '/page1',
          component: {
            default: {
              componentClass: Page1Menu,
            },
          },
        },
        '/page2': {
          path: '/page2',
          component: {
            default: {
              componentClass: Page2Menu,
            },
          },
        },
      },
    },
  },
  content: {
    '/page1': {
      path: '/page1',
      component: {
        default: {
          componentClass: Page1Content,
        },
      },
    },
    '/page2': {
      path: '/page2',
      component: {
        default: {
          componentClass: Page2Content,
        },
      },
    },
    '/page3': {
      path: '/page3',
      component: {
        default: {
          componentClass: Page3Content,
        },
      },
    },
  },
};
```