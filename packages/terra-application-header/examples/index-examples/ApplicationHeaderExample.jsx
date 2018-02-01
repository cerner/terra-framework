import React from 'react';
import 'terra-base/lib/baseStyles';
import ApplicationHeader from '../../lib/ApplicationHeader';

const ApplicationHeaderExample = () => (
  <ApplicationHeader
    applicationLinks={[{}]}
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
);

export default ApplicationHeaderExample;
