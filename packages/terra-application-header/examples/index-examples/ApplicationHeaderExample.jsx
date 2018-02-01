import React from 'react';
import 'terra-base/lib/baseStyles';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MemoryRouter } from 'react-router-dom';
import ApplicationHeader from '../../lib/ApplicationHeader';

const ApplicationHeaderExample = () => (
  <MemoryRouter>
    <ApplicationHeader
      applicationLinks={[{ path: '/testPath', text: 'Test' }]}
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
  </MemoryRouter>
);

export default ApplicationHeaderExample;
