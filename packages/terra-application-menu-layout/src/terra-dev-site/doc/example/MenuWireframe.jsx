import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import ApplicationMenuLayout from 'terra-application-menu-layout/lib/ApplicationMenuLayout';
import PlaceHolder from 'terra-application-menu-layout/lib/terra-dev-site/doc/common/Placeholder';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const Menu = () => (
  <div style={{ height: '450px', width: '300px' }}>
    <ApplicationMenuLayout
      header={<PlaceHolder text="Header" height="50px" />}
      footer={<PlaceHolder text="Footer" height="50px" />}
      extensions={<PlaceHolder text="Extensions" height="50px" />}
      content={<PlaceHolder text="Content" />}
    />
  </div>
);

export default Menu;
