import React from 'react';
import 'terra-base/lib/baseStyles';
import Base from 'terra-base';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MemoryRouter } from 'react-router-dom';
import ApplicationHeader from '../../lib/ApplicationHeader';
import messages from 'terra-application-links/translations/en-US.json';

const ApplicationHeaderExample = () => (
  <Base locale="en-US" customMessages={messages}>
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
  </Base>
);

export default ApplicationHeaderExample;
