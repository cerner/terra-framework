import PropTypes from 'prop-types';
import LayoutDefault from 'terra-layout/examples/test-examples/LayoutDefault';
import LayoutNoMenu from 'terra-layout/examples/test-examples/LayoutNoMenu';
import LayoutLongText from 'terra-layout/examples/test-examples/LayoutLongText';
import LayoutNoHeader from 'terra-layout/examples/test-examples/LayoutNoHeader';
import NavigationLayoutBasic from 'terra-navigation-layout/examples/test-examples/NavigationLayoutBasic';
import NavigationLayoutComplex from 'terra-navigation-layout/examples/test-examples/NavigationLayoutComplex';

import LayoutExample from 'terra-layout/examples/Index';
import NavigationLayoutExample from 'terra-navigation-layout/examples/Index';

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
