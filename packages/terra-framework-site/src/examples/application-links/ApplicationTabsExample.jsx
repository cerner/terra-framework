import React from 'react';
import { ApplicationTabs } from 'terra-application-links';

const Menu = () => (
  <div style={{ backgroundColor: '#2481ca', width: '100%' }}>
    <ApplicationTabs
      links={[
        { path: '/components/application-links/durp', text: 'durp' },
        { path: '/components/application-links/sandwich', text: 'sandwich' },
        { path: '/components/application-links/monkey', text: 'monkey' },
        { path: '/components/application-links/racecar', text: 'racecarracecarracecarracecar' },
        { path: '/components/application-links/turkey', text: 'turkey' },
        { path: '/components/application-links/waffle', text: 'waffle' },
        { path: '/components/application-links/neo', text: 'neo' },
        { path: '/components/application-links/asdf', text: 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf' },
        { path: '/components/application-links/pop', text: 'pop' },
        { path: '/components/application-links/krackle', text: 'krackle' },
        { path: '/components/application-links/womp', text: 'womp' },
        { path: '/components/application-links/lovely', text: 'lovely' },
      ]}
    />
  </div>
);

export default Menu;
