import Home from './Home';

const config = {
  rootPath: '/site',
  navigation: {
    index: '/site/home',
    links: [{
      path: '/site/home',
      text: 'Home',
      component: Home,
      isStatic: true,
    }, {
      path: '/site/components',
      text: 'Components',
      exampleType: 'pages',
    }, {
      path: '/site/tests',
      text: 'Tests',
      exampleType: 'tests',
      isStatic: true,
    }],
  },
};

export default config;
