import LayoutDefault from './LayoutDefault';
import LayoutNoMenu from './LayoutNoMenu';
import LayoutLongText from './LayoutLongText';
import LayoutNoHeader from './LayoutNoHeader';

const config = {
  name: 'Layout',
  tests: [{
    path: '/tests/layout/default',
    component: LayoutDefault,
    description: 'Default',
  }, {
    path: '/tests/layout/no-menu',
    component: LayoutNoMenu,
    description: 'No Menu',
  }, {
    path: '/tests/layout/long-text',
    component: LayoutLongText,
    description: 'Long Text',
  }, {
    path: '/tests/layout/no-header',
    component: LayoutNoHeader,
    description: 'No Header',
  }],
};

export default config;
