import React from 'react';
import 'terra-base/lib/baseStyles';
/* eslint-disable import/no-extraneous-dependencies */
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ModalManager, { reducers as modalManagerReducers } from 'terra-modal-manager';
/* eslint-enable import/no-extraneous-dependencies */
import ApplicationMenu from '../../lib/ApplicationMenu';
import ApplicationContentExample from './ApplicationContentExample';

const store = createStore(
  combineReducers(Object.assign({},
    modalManagerReducers,
  )),
);

const ApplicationMenuExample = () => (
  <div style={{ width: '300px', height: '500px', position: 'relative', backgroundColor: 'aliceblue' }}>
    <Provider store={store}>
      <ModalManager>
        <ApplicationMenu
          content={<ApplicationContentExample />}
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
      </ModalManager>
    </Provider>
  </div>
);

export default ApplicationMenuExample;
