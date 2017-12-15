import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './app/App';
import { routes, navigation } from './appConfig';
import { Provider } from 'xfc';

Provider.init({
  acls: ['*'],
  secret: () => (Promise.resolve('Success')),
});

ReactDOM.render((
  <Router>
    <App routeConfig={routes} navigation={navigation} />
  </Router>
), document.getElementById('root'));
