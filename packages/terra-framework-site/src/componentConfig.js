import PropTypes from 'prop-types';
import LayoutDefault from 'terra-layout/tests/nightwatch/LayoutDefault';
import LayoutNoMenu from 'terra-layout/tests/nightwatch/LayoutNoMenu';
import LayoutLongText from 'terra-layout/tests/nightwatch/LayoutLongText';
import LayoutNoHeader from 'terra-layout/tests/nightwatch/LayoutNoHeader';
import NavigationLayoutBasic from 'terra-navigation-layout/tests/nightwatch/NavigationLayoutBasic';
import NavigationLayoutComplex from 'terra-navigation-layout/tests/nightwatch/NavigationLayoutComplex';

import LayoutExample from './examples/layout/Index';
import NavigationLayoutExample from './examples/navigation-layout/Index';

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
};

export default componentConfig;
export { siteConfigPropType, itemConfigPropType };
