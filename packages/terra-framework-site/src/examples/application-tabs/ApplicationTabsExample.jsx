import React from 'react';
import ApplicationTabs from 'terra-application-tabs';

const Menu = () => (
  <div style={{ height: '450px', width: '100%' }}>
    <ApplicationTabs
      tabConfig={[
        { path: '/components/application-tabs/durp', label: 'durp' },
        { path: '/components/application-tabs/sandwich', label: 'sandwich' },
        { path: '/components/application-tabs/monkey', label: 'monkey' },
        { path: '/components/application-tabs/racecar', label: 'racecar' },
        { path: '/components/application-tabs/turkey', label: 'turkey' },
        { path: '/components/application-tabs/waffle', label: 'waffle' },
        { path: '/components/application-tabs/neo', label: 'neo' },
        { path: '/components/application-tabs/asdf', label: 'asdf' },
        { path: '/components/application-tabs/pop', label: 'pop' },
        { path: '/components/application-tabs/krackle', label: 'krackle' },
        { path: '/components/application-tabs/womp', label: 'womp' },
        { path: '/components/application-tabs/lovely', label: 'lovely' },
      ]}
    />
  </div>
);

export default Menu;
