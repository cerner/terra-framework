import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'xfc';

import App from 'x-site/src/app/App';
import routeConfiguration from 'x-site/src/app/configureApp';

import componentConfig from './generatedComponentConfig';
import siteConfig from './siteConfig';

const { routeConfig, navigation } = routeConfiguration(siteConfig, componentConfig);

const routes = Object.freeze(routeConfig);

Provider.init({
  acls: ['*'],
  secret: () => (Promise.resolve('Success')),
});

const themes = {
  'Default Theme': '',
  'Mock Theme': 'cerner-mock-theme',
};

ReactDOM.render((
  <Router>
    <App routeConfig={routes} navigation={navigation} themes={themes} appSubtitle="Framework" />
  </Router>
), document.getElementById('root'));
