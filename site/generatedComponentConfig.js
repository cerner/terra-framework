/* This file is auto-generated by terra-site's generate-component-config config. */

// Component Examples
import TerraApplicationHeaderLayoutIndex from '../packages/terra-application-header-layout/examples/Index.site-page';
import TerraApplicationMenuLayoutIndex from '../packages/terra-application-menu-layout/examples/Index.site-page';
import TerraEmbeddedComponentIndex from '../packages/terra-embedded-component/examples/Index.site-page';
import TerraLayoutIndex from '../packages/terra-layout/examples/Index.site-page';
import TerraNavigationLayoutIndex from '../packages/terra-navigation-layout/examples/Index.site-page';

// Component Test Examples
import ApplicationHeaderDefault from '../packages/terra-application-header-layout/examples/test-examples/ApplicationHeaderDefault';
import ApplicationMenuDefault from '../packages/terra-application-menu-layout/examples/test-examples/ApplicationMenuDefault';
import DefaultEmbeddedComponent from '../packages/terra-embedded-component/examples/test-examples/DefaultEmbeddedComponent';
import LayoutDefault from '../packages/terra-layout/examples/test-examples/LayoutDefault';
import LayoutLongText from '../packages/terra-layout/examples/test-examples/LayoutLongText';
import LayoutNoHeader from '../packages/terra-layout/examples/test-examples/LayoutNoHeader';
import LayoutNoMenu from '../packages/terra-layout/examples/test-examples/LayoutNoMenu';
import NavigationLayoutBasic from '../packages/terra-navigation-layout/examples/test-examples/NavigationLayoutBasic';
import NavigationLayoutComplex from '../packages/terra-navigation-layout/examples/test-examples/NavigationLayoutComplex';

const componentConfig = {
  'terra-application-header-layout': {
    name: 'Application Header Layout',
    path: '/application-header-layout',
    pages: [
      {
        name: 'Index',
        path: '/index',
        component: TerraApplicationHeaderLayoutIndex,
      },
    ],
    tests: [
      {
        name: 'Application Header Default',
        path: '/application-header-default',
        component: ApplicationHeaderDefault,
      },
    ],
  },
  'terra-application-menu-layout': {
    name: 'Application Menu Layout',
    path: '/application-menu-layout',
    pages: [
      {
        name: 'Index',
        path: '/index',
        component: TerraApplicationMenuLayoutIndex,
      },
    ],
    tests: [
      {
        name: 'Application Menu Default',
        path: '/application-menu-default',
        component: ApplicationMenuDefault,
      },
    ],
  },
  'terra-embedded-component': {
    name: 'Embedded Component',
    path: '/embedded-component',
    pages: [
      {
        name: 'Index',
        path: '/index',
        component: TerraEmbeddedComponentIndex,
      },
    ],
    tests: [
      {
        name: 'Default Embedded Component',
        path: '/default-embedded-component',
        component: DefaultEmbeddedComponent,
      },
    ],
  },
  'terra-layout': {
    name: 'Layout',
    path: '/layout',
    pages: [
      {
        name: 'Index',
        path: '/index',
        component: TerraLayoutIndex,
      },
    ],
    tests: [
      {
        name: 'Layout Default',
        path: '/layout-default',
        component: LayoutDefault,
      },
      {
        name: 'Layout Long Text',
        path: '/layout-long-text',
        component: LayoutLongText,
      },
      {
        name: 'Layout No Header',
        path: '/layout-no-header',
        component: LayoutNoHeader,
      },
      {
        name: 'Layout No Menu',
        path: '/layout-no-menu',
        component: LayoutNoMenu,
      },
    ],
  },
  'terra-navigation-layout': {
    name: 'Navigation Layout',
    path: '/navigation-layout',
    pages: [
      {
        name: 'Index',
        path: '/index',
        component: TerraNavigationLayoutIndex,
      },
    ],
    tests: [
      {
        name: 'Navigation Layout Basic',
        path: '/navigation-layout-basic',
        component: NavigationLayoutBasic,
      },
      {
        name: 'Navigation Layout Complex',
        path: '/navigation-layout-complex',
        component: NavigationLayoutComplex,
      },
    ],
  },
};

export default componentConfig;
