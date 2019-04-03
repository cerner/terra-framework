/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Icon1 from 'terra-icon/lib/icon/IconTrash';
import Icon2 from 'terra-icon/lib/icon/IconFolder';
import Icon3 from 'terra-icon/lib/icon/IconSearch';
import ApplicationHeader from '../../../header/_ApplicationHeader';

const ApplicationLayoutHeader = () => (
  <MemoryRouter>
    <ApplicationHeader
      id="test-header"
      layoutConfig={{ size: 'large' }}
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
      applicationLinks={{
        links: [
          {
            id: '123',
            path: '/something1',
            text: 'item 1',
            icon: <Icon1 />,
          },
          {
            id: '234',
            path: '/something2',
            text: 'item 2',
            icon: <Icon2 />,
          },
          {
            id: '345',
            path: '/something3',
            text: 'item 3',
            icon: <Icon3 />,
          },
        ],
      }}
    />
  </MemoryRouter>
);

export default ApplicationLayoutHeader;
