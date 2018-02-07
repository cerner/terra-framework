/* This file is auto-generated by terra-site's generate-component-config config. */

// Component Examples
import TerraAppDelegateIndex from './packages/terra-app-delegate/examples/Index.site-page';
import TerraApplicationHeaderLayoutIndex from './packages/terra-application-header-layout/examples/Index.site-page';
import TerraApplicationMenuLayoutIndex from './packages/terra-application-menu-layout/examples/Index.site-page';
import TerraApplicationNameIndex from './packages/terra-application-name/examples/Index.site-page';
import TerraApplicationUtilityIndex from './packages/terra-application-utility/examples/Index.site-page';
import TerraEmbeddedComponentIndex from './packages/terra-embedded-component/examples/Index.site-page';
import TerraLayoutIndex from './packages/terra-layout/examples/Index.site-page';
import TerraModalManagerIndex from './packages/terra-modal-manager/examples/Index.site-page';
import TerraNavigationLayoutIndex from './packages/terra-navigation-layout/examples/Index.site-page';
import TerraThemeProviderIndex from './packages/terra-theme-provider/examples/Index.site-page';

// Component Test Examples
import ApplicationHeaderDefault from './packages/terra-application-header-layout/examples/test-examples/ApplicationHeaderDefault';
import ApplicationMenuDefault from './packages/terra-application-menu-layout/examples/test-examples/ApplicationMenuDefault';
import DefaultApplicationName from './packages/terra-application-name/examples/test-examples/DefaultApplicationName';
import DefaultApplicationHeaderUtility from './packages/terra-application-utility/examples/test-examples/DefaultApplicationHeaderUtility';
import DefaultUserData from './packages/terra-application-utility/examples/test-examples/DefaultUserData';
import DefaultEmbeddedComponent from './packages/terra-embedded-component/examples/test-examples/DefaultEmbeddedComponent';
import LayoutDefault from './packages/terra-layout/examples/test-examples/LayoutDefault';
import LayoutLongText from './packages/terra-layout/examples/test-examples/LayoutLongText';
import LayoutNoHeader from './packages/terra-layout/examples/test-examples/LayoutNoHeader';
import LayoutNoMenu from './packages/terra-layout/examples/test-examples/LayoutNoMenu';
import ModalManagerDefault from './packages/terra-modal-manager/examples/test-examples/ModalManagerDefault';
import NavigationLayoutBasic from './packages/terra-navigation-layout/examples/test-examples/NavigationLayoutBasic';
import NavigationLayoutComplex from './packages/terra-navigation-layout/examples/test-examples/NavigationLayoutComplex';
import DefaultThemeProvider from './packages/terra-theme-provider/examples/test-examples/DefaultThemeProvider';
import GlobalSwitchThemes from './packages/terra-theme-provider/examples/test-examples/GlobalSwitchThemes';
import GlobalThemeProvider from './packages/terra-theme-provider/examples/test-examples/GlobalThemeProvider';
import SwitchThemes from './packages/terra-theme-provider/examples/test-examples/SwitchThemes';
import ThemeProviderNoTheme from './packages/terra-theme-provider/examples/test-examples/ThemeProviderNoTheme';

const componentConfig = {
  'terra-app-delegate': {
    name: 'App Delegate',
    path: '/app-delegate',
    pages: [
      {
        name: 'Index',
        path: '/index',
        component: TerraAppDelegateIndex,
      },
    ],
  },
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
  'terra-application-name': {
    name: 'Application Name',
    path: '/application-name',
    pages: [
      {
        name: 'Index',
        path: '/index',
        component: TerraApplicationNameIndex,
      },
    ],
    tests: [
      {
        name: 'Default Application Name',
        path: '/default-application-name',
        component: DefaultApplicationName,
      },
    ],
  },
  'terra-application-utility': {
    name: 'Application Utility',
    path: '/application-utility',
    pages: [
      {
        name: 'Index',
        path: '/index',
        component: TerraApplicationUtilityIndex,
      },
    ],
    tests: [
      {
        name: 'Default Application Header Utility',
        path: '/default-application-header-utility',
        component: DefaultApplicationHeaderUtility,
      },
      {
        name: 'Default User Data',
        path: '/default-user-data',
        component: DefaultUserData,
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
  'terra-modal-manager': {
    name: 'Modal Manager',
    path: '/modal-manager',
    pages: [
      {
        name: 'Index',
        path: '/index',
        component: TerraModalManagerIndex,
      },
    ],
    tests: [
      {
        name: 'Modal Manager Default',
        path: '/modal-manager-default',
        component: ModalManagerDefault,
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
  'terra-theme-provider': {
    name: 'Theme Provider',
    path: '/theme-provider',
    pages: [
      {
        name: 'Index',
        path: '/index',
        component: TerraThemeProviderIndex,
      },
    ],
    tests: [
      {
        name: 'Default Theme Provider',
        path: '/default-theme-provider',
        component: DefaultThemeProvider,
      },
      {
        name: 'Global Switch Themes',
        path: '/global-switch-themes',
        component: GlobalSwitchThemes,
      },
      {
        name: 'Global Theme Provider',
        path: '/global-theme-provider',
        component: GlobalThemeProvider,
      },
      {
        name: 'Switch Themes',
        path: '/switch-themes',
        component: SwitchThemes,
      },
      {
        name: 'Theme Provider No Theme',
        path: '/theme-provider-no-theme',
        component: ThemeProviderNoTheme,
      },
    ],
  },
};

export default componentConfig;
