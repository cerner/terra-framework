import LayoutDefault from 'terra-layout/examples/test-examples/LayoutDefault';
import LayoutNoMenu from 'terra-layout/examples/test-examples/LayoutNoMenu';
import LayoutLongText from 'terra-layout/examples/test-examples/LayoutLongText';
import LayoutNoHeader from 'terra-layout/examples/test-examples/LayoutNoHeader';
import NavigationLayoutBasic from 'terra-navigation-layout/examples/test-examples/NavigationLayoutBasic';
import NavigationLayoutComplex from 'terra-navigation-layout/examples/test-examples/NavigationLayoutComplex';

import LayoutExample from 'terra-layout/examples/Index.example';
import NavigationLayoutExample from 'terra-navigation-layout/examples/Index.example';


// Update to be 'terra-application-header-layout/examples/test-examples/...';
import ApplicationHeaderDefault from 'terra-application-header-layout/tests/nightwatch/ApplicationHeaderDefault';
import ApplicationMenuDefault from 'terra-application-menu-layout/tests/nightwatch/ApplicationMenuDefault';

// Update to be 'terra-application-header-layout/examples/Index';
import HeaderExample from './examples/application-header-layout/Index';
import MenuExample from './examples/application-menu-layout/Index';


// const itemConfigPropType = PropTypes.shape({
//   path: PropTypes.string,
//   component: PropTypes.func,
//   description: PropTypes.string,
// });
//
// const siteConfigPropType = PropTypes.objectOf(PropTypes.shape({
//   name: PropTypes.string,
//   example: itemConfigPropType,
//   testRoot: PropTypes.string,
//   tests: PropTypes.arrayOf(itemConfigPropType),
// }));

const componentConfig = {
  layout: {
    name: 'Layout',
    example: {
      path: '/components/layout',
      component: LayoutExample,
      description: 'Layout',
    },
    testRoot: '/tests/layout',
    tests: [{
      path: '/default',
      component: LayoutDefault,
      description: 'Default',
    }, {
      path: '/no-menu',
      component: LayoutNoMenu,
      description: 'No Menu',
    }, {
      path: '/long-text',
      component: LayoutLongText,
      description: 'Long Text',
    }, {
      path: '/no-header',
      component: LayoutNoHeader,
      description: 'No Header',
    }],
  },
  navigationLayout: {
    name: 'Navigation Layout',
    example: {
      path: '/components/navigation-layout',
      component: NavigationLayoutExample,
      description: 'Navigation Layout',
    },
    testRoot: '/tests/navigation-layout',
    tests: [{
      path: '/basic',
      component: NavigationLayoutBasic,
      description: 'Basic',
    }, {
      path: '/complex',
      component: NavigationLayoutComplex,
      description: 'Complex',
    }],
  },
  applicationHeader: {
    name: 'Application Header Layout',
    example: {
      path: '/components/application-header-layout',
      component: HeaderExample,
      description: 'Application Header Layout',
    },
    testRoot: '/tests/application-header-layout',
    tests: [{
      path: '/default',
      component: ApplicationHeaderDefault,
      description: 'Default',
    }],
  },
  applicationMenu: {
    name: 'Application Menu Layout',
    example: {
      path: '/components/application-menu-layout',
      component: MenuExample,
      description: 'Application Menu Layout',
    },
    testRoot: '/tests/application-menu-layout',
    tests: [{
      path: '/default',
      component: ApplicationMenuDefault,
      description: 'Default',
    }],
  },
};

export default componentConfig;
