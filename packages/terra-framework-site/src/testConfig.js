import LayoutTests from 'terra-layout/tests/nightwatch/LayoutTests';

const menuConfig = {
  '/tests/layout': {
    path: '/tests/layout',
    component: {
      default: {
        componentClass: LayoutTests,
      },
    },
  },
};

export default menuConfig;
