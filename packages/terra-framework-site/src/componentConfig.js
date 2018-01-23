import PropTypes from 'prop-types';
import LayoutDefault from 'terra-layout/tests/nightwatch/LayoutDefault';
import LayoutNoMenu from 'terra-layout/tests/nightwatch/LayoutNoMenu';
import LayoutLongText from 'terra-layout/tests/nightwatch/LayoutLongText';
import LayoutNoHeader from 'terra-layout/tests/nightwatch/LayoutNoHeader';
import NavigationLayoutBasic from 'terra-navigation-layout/tests/nightwatch/NavigationLayoutBasic';
import NavigationLayoutComplex from 'terra-navigation-layout/tests/nightwatch/NavigationLayoutComplex';
import ApplicationHeaderDefault from 'terra-application-header-layout/tests/nightwatch/ApplicationHeaderDefault';
import ApplicationMenuDefault from 'terra-application-menu-layout/tests/nightwatch/ApplicationMenuDefault';
import DefaultThemeProvider from 'terra-theme-provider/tests/nightwatch/DefaultThemeProvider';
import GlobalThemeProvider from 'terra-theme-provider/tests/nightwatch/GlobalThemeProvider';
import SwitchThemes from 'terra-theme-provider/tests/nightwatch/SwitchThemes';
import GlobalSwitchThemes from 'terra-theme-provider/tests/nightwatch/GlobalSwitchThemes';
import ThemeProviderNoTheme from 'terra-theme-provider/tests/nightwatch/ThemeProviderNoTheme';
import ModalManagerDefault from 'terra-modal-manager/tests/nightwatch/ModalManagerDefault';

import AppDelegateExample from './examples/app-delegate/Index';
import ApplicationLinksExample from './examples/application-links/Index';
import LayoutExample from './examples/layout/Index';
import HeaderExample from './examples/application-header-layout/Index';
import MenuExample from './examples/application-menu-layout/Index';
import ModalManagerExample from './examples/modal-manager/Index';
import NavigationLayoutExample from './examples/navigation-layout/Index';
import ThemeProviderExample from './examples/theme-provider/Index';

const itemConfigPropType = PropTypes.shape({
  path: PropTypes.string,
  component: PropTypes.func,
  description: PropTypes.string,
});

const siteConfigPropType = PropTypes.objectOf(PropTypes.shape({
  name: PropTypes.string,
  example: itemConfigPropType,
  testRoot: PropTypes.string,
  tests: PropTypes.arrayOf(itemConfigPropType),
}));

const componentConfig = {
  appDelegate: {
    name: 'App Delegate',
    example: {
      path: '/components/app-delegate',
      component: AppDelegateExample,
      description: 'App Delegate',
    },
  },
  applicationLinks: {
    name: 'Application Links',
    example: {
      path: '/components/application-links',
      component: ApplicationLinksExample,
      description: 'Application Links',
    },
  },
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
  modalManager: {
    name: 'Modal Manager',
    example: {
      path: '/components/modal-manager',
      component: ModalManagerExample,
      description: 'Modal Manager',
    },
    testRoot: '/tests/modal-manager',
    tests: [{
      path: '/default',
      component: ModalManagerDefault,
      description: 'Default',
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
  themeProvider: {
    name: 'Theme Provider',
    example: {
      path: '/components/theme-provider',
      component: ThemeProviderExample,
      description: 'ThemeProvider',
    },
    testRoot: '/tests/theme-provider',
    tests: [{
      path: '/default',
      component: DefaultThemeProvider,
      description: 'Default',
    }, {
      path: '/global-theme',
      component: GlobalThemeProvider,
      description: 'Global',
    }, {
      path: '/theme-switching',
      component: SwitchThemes,
      description: 'Theme Switching',
    }, {
      path: '/global-theme-switching',
      component: GlobalSwitchThemes,
      description: 'Global Theme Switching',
    }, {
      path: '/theme-provider-no-theme',
      component: ThemeProviderNoTheme,
      description: 'No Theme',
    }],
  },
};

export default componentConfig;
export { siteConfigPropType, itemConfigPropType };
