import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import ModalManager, { reducers as modalManagerReducers } from '../../lib/index';
import DemoContainer from './DemoContainer';

const store = createStore(
  combineReducers(Object.assign({},
    modalManagerReducers,
  )),
);

const ModalManagerDefault = () => (
  <Provider store={store}>
    <ModalManager>
      <DemoContainer identifier="root-component" />
    </ModalManager>
  </Provider>
);

export default ModalManagerDefault;
