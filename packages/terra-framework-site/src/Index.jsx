import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import appConfig from './appConfig';

ReactDOM.render((
  <App config={appConfig} />
), document.getElementById('root'));
