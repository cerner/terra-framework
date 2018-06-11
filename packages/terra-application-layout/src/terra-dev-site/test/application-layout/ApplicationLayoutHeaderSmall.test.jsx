/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ApplicationHeader from '../../../header/_ApplicationHeader';
import ExtensionsExample from '../common/ExtensionsExample';

const ApplicationLayoutHeaderSmall = () => (
  <MemoryRouter>
    <ApplicationHeader
      id="test-header"
      layoutConfig={{ size: 'small', toggleMenu: () => {} }}
      nameConfig={{ title: 'app-test-title' }}
      utilityConfig={{
        title: 'test-util-title',
        initialSelectedKey: 'test-menu',
        onChange: () => {},
        menuItems: [
          {
            key: 'test-menu',
            contentLocation: 'body',
            title: 'test-menu-title',
          },
        ],
      }}
      extensions={<ExtensionsExample layoutConfig={{ size: 'large' }} />}
      applicationLinks={[
        {
          id: '123',
          path: '/something1',
          text: 'item 1',
        },
        {
          id: '234',
          path: '/something2',
          text: 'item 2',
        },
        {
          id: '345',
          path: '/something3',
          text: 'item 3',
        },
      ]}
    />
  </MemoryRouter>
);

export default ApplicationLayoutHeaderSmall;
