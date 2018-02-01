import React from 'react';
import 'terra-base/lib/baseStyles';
// eslint-disable import/no-extraneous-dependencies
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ModalManager, { reducers as modalManagerReducers } from 'terra-modal-manager';
// eslint-enable import/no-extraneous-dependencies
import ApplicationMenu from '../../lib/ApplicationMenu';

const store = createStore(
  combineReducers(Object.assign({},
    modalManagerReducers,
  )),
);

const ApplicationMenuExample = () => (
  <Provider store={store}>
    <ModalManager>
      <div style={{ width: '300px', height: '500px', position: 'relative' }}>
        <ApplicationMenu
          content={<div style={{ backgroundColor: 'red', width: '100%', height: '1500px', position: 'relative' }} />}
          layoutConfig={{
            size: 'medium',
            toggleMenu: () => {},
            menuIsOpen: false,
          }}
          nameConfig={{
            title: 'Application Name',
          }}
          utilityConfig={{
            userName: 'Some User',
            userDetails: 'Details about user',
            onUtilityChange: (event, key) => { this.stuff(key); },
          }}
        />
      </div>
    </ModalManager>
  </Provider>
);

export default ApplicationMenuExample;
