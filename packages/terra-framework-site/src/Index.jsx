import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import appConfig from './app/appConfig';

ReactDOM.render((
  <App config={appConfig} />
), document.getElementById('root'));
