import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import navConfig from './navConfig';

ReactDOM.render((
  <App config={navConfig} />
), document.getElementById('root'));
