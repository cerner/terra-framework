/* This file is auto-generated by terra-dev-site's generate-component-config config. */

// Component Examples
import TerraAggregatorIndex from './packages/terra-aggregator/examples/Index.site-page';
import TerraAppDelegateIndex from './packages/terra-app-delegate/examples/Index.site-page';
import TerraApplicationHeaderLayoutIndex from './packages/terra-application-header-layout/examples/Index.site-page';
import TerraApplicationLinksIndex from './packages/terra-application-links/examples/Index.site-page';
import TerraApplicationMenuLayoutIndex from './packages/terra-application-menu-layout/examples/Index.site-page';
import TerraApplicationNameIndex from './packages/terra-application-name/examples/Index.site-page';
import TerraDisclosureManagerIndex from './packages/terra-disclosure-manager/examples/Index.site-page';
import TerraInfiniteListIndex from './packages/terra-infinite-list/examples/Index.site-page';
import TerraLayoutIndex from './packages/terra-layout/examples/Index.site-page';
import TerraModalManagerIndex from './packages/terra-modal-manager/examples/Index.site-page';
import TerraNavigationLayoutIndex from './packages/terra-navigation-layout/examples/Index.site-page';
import TerraNavigationSideMenuIndex from './packages/terra-navigation-side-menu/examples/Index.site-page';
import TerraSlidePanelManagerIndex from './packages/terra-slide-panel-manager/examples/Index.site-page';
import TerraThemeProviderIndex from './packages/terra-theme-provider/examples/Index.site-page';

// Component Test Examples
import AggregatorStandalone from './packages/terra-aggregator/examples/test-examples/AggregatorStandalone.example';
import AggregatorWithDisclosure from './packages/terra-aggregator/examples/test-examples/AggregatorWithDisclosure.example';
import ApplicationHeaderDefault from './packages/terra-application-header-layout/examples/test-examples/ApplicationHeaderDefault.example';
import ApplicationTabsDefault from './packages/terra-application-links/examples/test-examples/ApplicationTabsDefault.example';
import ApplicationMenuDefault from './packages/terra-application-menu-layout/examples/test-examples/ApplicationMenuDefault.example';
import ApplicationHeaderNameDefault from './packages/terra-application-name/examples/test-examples/ApplicationHeaderNameDefault.example';
import ApplicationHeaderNameTruncated from './packages/terra-application-name/examples/test-examples/ApplicationHeaderNameTruncated.example';
import ApplicationMenuNameDefault from './packages/terra-application-name/examples/test-examples/ApplicationMenuNameDefault.example';
import ApplicationMenuNameTruncated from './packages/terra-application-name/examples/test-examples/ApplicationMenuNameTruncated.example';
import DefaultApplicationUtility from './packages/terra-application-utility/examples/test-examples/DefaultApplicationUtility.example';
import LayoutDefault from './packages/terra-layout/examples/test-examples/LayoutDefault.example';
import LayoutNoHeader from './packages/terra-layout/examples/test-examples/LayoutNoHeader.example';
import LayoutNoMenu from './packages/terra-layout/examples/test-examples/LayoutNoMenu.example';
import LayoutSlidePanelExample from './packages/terra-layout/examples/test-examples/LayoutSlidePanelExample.example';
import ModalManagerDefault from './packages/terra-modal-manager/examples/test-examples/ModalManagerDefault.example';
import NavigationLayoutBasic from './packages/terra-navigation-layout/examples/test-examples/NavigationLayoutBasic.example';
import NavigationLayoutComplex from './packages/terra-navigation-layout/examples/test-examples/NavigationLayoutComplex.example';
import NavigationSideMenuDefault from './packages/terra-navigation-side-menu/examples/test-examples/NavigationSideMenuDefault.example';
import NavigationSideMenuRoot from './packages/terra-navigation-side-menu/examples/test-examples/NavigationSideMenuRoot.example';
import SlidePanelManagerDefault from './packages/terra-slide-panel-manager/examples/test-examples/SlidePanelManagerDefault.example';
import DefaultThemeProvider from './packages/terra-theme-provider/examples/test-examples/DefaultThemeProvider.example';
import GlobalSwitchThemes from './packages/terra-theme-provider/examples/test-examples/GlobalSwitchThemes.example';
import GlobalThemeProvider from './packages/terra-theme-provider/examples/test-examples/GlobalThemeProvider.example';
import SwitchThemes from './packages/terra-theme-provider/examples/test-examples/SwitchThemes.example';
import ThemeProviderNoTheme from './packages/terra-theme-provider/examples/test-examples/ThemeProviderNoTheme.example';

const componentConfig = {
  'terra-aggregator': {
    name: 'Aggregator',
    path: '/aggregator',
    pages: [
      {
        name: 'Index',
        path: '/index',
        component: TerraAggregatorIndex,
      },
    ],
    tests: [
      {
        name: 'Aggregator Standalone',
        path: '/aggregator-standalone',
        component: AggregatorStandalone,
      },
      {
        name: 'Aggregator With Disclosure',
        path: '/aggregator-with-disclosure',
        component: AggregatorWithDisclosure,
      },
    ],
  },
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
  'terra-application-links': {
    name: 'Application Links',
    path: '/application-links',
    pages: [
      {
        name: 'Index',
        path: '/index',
        component: TerraApplicationLinksIndex,
      },
    ],
    tests: [
      {
        name: 'Application Tabs Default',
        path: '/application-tabs-default',
        component: ApplicationTabsDefault,
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
        name: 'Application Header Name Default',
        path: '/application-header-name-default',
        component: ApplicationHeaderNameDefault,
      },
      {
        name: 'Application Header Name Truncated',
        path: '/application-header-name-truncated',
        component: ApplicationHeaderNameTruncated,
      },
      {
        name: 'Application Menu Name Default',
        path: '/application-menu-name-default',
        component: ApplicationMenuNameDefault,
      },
      {
        name: 'Application Menu Name Truncated',
        path: '/application-menu-name-truncated',
        component: ApplicationMenuNameTruncated,
      },
    ],
  },
  'terra-application-utility': {
    name: 'Application Utility',
    path: '/application-utility',
    tests: [
      {
        name: 'Default Application Utility',
        path: '/default-application-utility',
        component: DefaultApplicationUtility,
      },
    ],
  },
  'terra-disclosure-manager': {
    name: 'Disclosure Manager',
    path: '/disclosure-manager',
    pages: [
      {
        name: 'Index',
        path: '/index',
        component: TerraDisclosureManagerIndex,
      },
    ],
  },
  'terra-infinite-list': {
    name: 'Infinite List',
    path: '/infinite-list',
    pages: [
      {
        name: 'Index',
        path: '/index',
        component: TerraInfiniteListIndex,
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
        name: 'Layout No Header',
        path: '/layout-no-header',
        component: LayoutNoHeader,
      },
      {
        name: 'Layout No Menu',
        path: '/layout-no-menu',
        component: LayoutNoMenu,
      },
      {
        name: 'Layout Slide Panel Example',
        path: '/layout-slide-panel-example',
        component: LayoutSlidePanelExample,
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
  'terra-navigation-side-menu': {
    name: 'Navigation Side Menu',
    path: '/navigation-side-menu',
    pages: [
      {
        name: 'Index',
        path: '/index',
        component: TerraNavigationSideMenuIndex,
      },
    ],
    tests: [
      {
        name: 'Navigation Side Menu Default',
        path: '/navigation-side-menu-default',
        component: NavigationSideMenuDefault,
      },
      {
        name: 'Navigation Side Menu Root',
        path: '/navigation-side-menu-root',
        component: NavigationSideMenuRoot,
      },
    ],
  },
  'terra-slide-panel-manager': {
    name: 'Slide Panel Manager',
    path: '/slide-panel-manager',
    pages: [
      {
        name: 'Index',
        path: '/index',
        component: TerraSlidePanelManagerIndex,
      },
    ],
    tests: [
      {
        name: 'Slide Panel Manager Default',
        path: '/slide-panel-manager-default',
        component: SlidePanelManagerDefault,
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
