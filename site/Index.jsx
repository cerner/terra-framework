/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'xfc';

import App from 'terra-site/src/app/App';
import routeConfiguration from 'terra-site/src/app/configureApp';

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
    <App routeConfig={routes} navigation={navigation} rootPath={siteConfig.rootPath} themes={themes} appTitle="Title" appSubtitle="Framework" appLogoSrc={siteConfig.appLogoSrc} />
  </Router>
), document.getElementById('root'));
