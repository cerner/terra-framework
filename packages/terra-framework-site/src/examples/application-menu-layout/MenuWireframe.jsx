import React from 'react';
import ApplicationMenuLayout from 'terra-application-menu-layout';
import PlaceHolder from '../../app/common/Placeholder';

const Menu = () => (
  <div style={{ height: '450px', width: '300px' }}>
    <ApplicationMenuLayout
      layoutConfig={{ size: 'tiny', toggleMenu: () => {} }}
      header={<PlaceHolder text="Header" height="50px" />}
      footer={<PlaceHolder text="Footer" height="50px" />}
      extensions={<PlaceHolder text="Extensions" height="50px" />}
      content={<PlaceHolder text="Content" />}
    />
  </div>
);

export default Menu;
