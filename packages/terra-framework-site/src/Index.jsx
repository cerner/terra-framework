import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { routes, navigation } from './appConfig';

ReactDOM.render((
  <App routes={routes} navigation={navigation} />
), document.getElementById('root'));
