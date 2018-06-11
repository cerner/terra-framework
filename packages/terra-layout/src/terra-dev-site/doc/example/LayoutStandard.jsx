import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Layout from 'terra-layout/lib/Layout';
import ContentExample from 'terra-layout/lib/terra-dev-site/doc/common/ContentExample';
import MenuExample from 'terra-layout/lib/terra-dev-site/doc/common/MenuExample';
import ToolbarExample from 'terra-layout/lib/terra-dev-site/doc/common/ToolbarExample';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const layout = () => (
  <Layout
    header={<ToolbarExample />}
    menu={<MenuExample />}
    menuText="Menu"
    style={{ height: '400px', width: '100%' }}
  >
    <ContentExample />
  </Layout>
);

export default layout;
