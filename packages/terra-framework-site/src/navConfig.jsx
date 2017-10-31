import React from 'react';
import Home from './Home';
import Components from './Components';
import ComponentsMenu from './ComponentsMenu';
import Tests from './Tests';
import TestsMenu from './TestsMenu';

// import Button from 'terra-button';
// import IconClipboard from 'terra-icon/lib/icon/IconClipboard';
// import IconComment from 'terra-icon/lib/icon/IconComment';
// import IconNotification from 'terra-icon/lib/icon/IconNotification';

// const ChartMenuIcon = () => (
//   <Button size="large" icon={<IconClipboard />} variant="link" style={{ color: '#fff' }} />
// );

// const MessagesMenuIcon = () => (
//   <Button size="large" icon={<IconComment />} variant="link" style={{ color: '#fff' }} />
// );

// const AlertsMenuIcon = () => (
//   <Button size="large" icon={<IconNotification />} variant="link" style={{ color: '#fff' }} />
// );

const config = {
  navigation: {
    index: '/home',
    links: [{
      path: '/home',
      text: 'Home',
    //   component: ChartMenuIcon,
    }, {
      path: '/components',
      text: 'Components',
    //   component: AlertsMenuIcon,
    }, {
      path: '/tests',
      text: 'Tests',
    //   component: AlertsMenuIcon,
    }],
  },
  contentRoutes: {
    '/home': {
      path: '/home',
      component: {
        default: {
          componentClass: Home,
        },
      },
    },
    '/components': {
      path: '/components',
      component: {
        default: {
          componentClass: Components,
        },
      },
    },
    '/tests': {
      path: '/tests',
      component: {
        default: {
          componentClass: Tests,
        },
      },
    },
  },
  menuRoutes: {
    '/components': {
      path: '/components',
      component: {
        default: {
          componentClass: ComponentsMenu,
        },
      },
    },
    '/tests': {
      path: '/tests',
      component: {
        default: {
          componentClass: TestsMenu,
        },
      },
    },
      //   children: {
    //     '/patients/chart': {
    //       path: '/patients/chart',
    //       component: {
    //         default: {
    //           componentClass: ChartMenu,
    //           props: {
    //             sections: ['summary', 'orders', 'documentation'],
    //           },
    //         },
    //       },
    //       children: {
    //         '/patients/chart/review': {
    //           path: '/patients/chart/review',
    //           component: {
    //             default: {
    //               componentClass: ChartReviewMenu,
    //               props: {
    //                 customProp: 'Prop from config',
    //               },
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
  },
};

export default config;
