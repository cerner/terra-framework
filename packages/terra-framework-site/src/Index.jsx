import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'xfc';

import App from 'x-site/src/app/App';
import { routes, navigation } from './appConfig';

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
