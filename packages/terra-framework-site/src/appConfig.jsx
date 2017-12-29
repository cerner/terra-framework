import routeConfiguration from '../../x-site/src/app/configureApp';

import Home from './Home';
import componentConfig from './generatedComponentConfig';

const navigation = {
  index: '/site/home',
  links: [{
    path: '/site/home',
    text: 'Home',
  }, {
    path: '/site/components',
    text: 'Components',
  }, {
    path: '/site/tests',
    text: 'Tests',
  }],
};

const routeConfig = routeConfiguration(navigation, componentConfig);

routeConfig.content['/site/home'].component.default.componentClass = Home;

const routes = Object.freeze(routeConfig);

export { routes, navigation };
