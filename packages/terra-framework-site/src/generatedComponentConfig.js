// Component Examples
import TerraApplicationHeaderLayoutIndex from '../../terra-application-header-layout/examples/Index.example';
import TerraApplicationMenuLayoutIndex from '../../terra-application-menu-layout/examples/Index.example';
import TerraLayoutIndex from '../../terra-layout/examples/Index.example';
import TerraLayoutLayout from '../../terra-layout/examples/Layout.example';
import TerraNavigationLayoutIndex from '../../terra-navigation-layout/examples/Index.example';

// Component Test Examples
import ApplicationHeaderDefault from '../../terra-application-header-layout/examples/test-examples/ApplicationHeaderDefault';
import ApplicationMenuDefault from '../../terra-application-menu-layout/examples/test-examples/ApplicationMenuDefault';
import LayoutDefault from '../../terra-layout/examples/test-examples/LayoutDefault';
import LayoutLongText from '../../terra-layout/examples/test-examples/LayoutLongText';
import LayoutNoHeader from '../../terra-layout/examples/test-examples/LayoutNoHeader';
import LayoutNoMenu from '../../terra-layout/examples/test-examples/LayoutNoMenu';
import NavigationLayoutBasic from '../../terra-navigation-layout/examples/test-examples/NavigationLayoutBasic';
import NavigationLayoutComplex from '../../terra-navigation-layout/examples/test-examples/NavigationLayoutComplex';

const componentConfig = {
  'terra-application-header-layout': {
    name: 'Application Header Layout',
    exampleRoot: '/components/application-header-layout',
    examples: [
      {
        path: '/index',
        component: TerraApplicationHeaderLayoutIndex,
        description: 'Index',
      },
    ],
    testRoot: '/tests/application-header-layout',
    tests: [
      {
        path: '/application-header-default',
        component: ApplicationHeaderDefault,
        description: 'Application Header Default',
      },
    ],
  },
  'terra-application-menu-layout': {
    name: 'Application Menu Layout',
    exampleRoot: '/components/application-menu-layout',
    examples: [
      {
        path: '/index',
        component: TerraApplicationMenuLayoutIndex,
        description: 'Index',
      },
    ],
    testRoot: '/tests/application-menu-layout',
    tests: [
      {
        path: '/application-menu-default',
        component: ApplicationMenuDefault,
        description: 'Application Menu Default',
      },
    ],
  },
  'terra-layout': {
    name: 'Layout',
    exampleRoot: '/components/layout',
    examples: [
      {
        path: '/index',
        component: TerraLayoutIndex,
        description: 'Index',
      },
      {
        path: '/layout',
        component: TerraLayoutLayout,
        description: 'Layout',
      },
    ],
    testRoot: '/tests/layout',
    tests: [
      {
        path: '/layout-default',
        component: LayoutDefault,
        description: 'Layout Default',
      },
      {
        path: '/layout-long-text',
        component: LayoutLongText,
        description: 'Layout Long Text',
      },
      {
        path: '/layout-no-header',
        component: LayoutNoHeader,
        description: 'Layout No Header',
      },
      {
        path: '/layout-no-menu',
        component: LayoutNoMenu,
        description: 'Layout No Menu',
      },
    ],
  },
  'terra-navigation-layout': {
    name: 'Navigation Layout',
    exampleRoot: '/components/navigation-layout',
    examples: [
      {
        path: '/index',
        component: TerraNavigationLayoutIndex,
        description: 'Index',
      },
    ],
    testRoot: '/tests/navigation-layout',
    tests: [
      {
        path: '/navigation-layout-basic',
        component: NavigationLayoutBasic,
        description: 'Navigation Layout Basic',
      },
      {
        path: '/navigation-layout-complex',
        component: NavigationLayoutComplex,
        description: 'Navigation Layout Complex',
      },
    ],
  },
};

export default componentConfig;
