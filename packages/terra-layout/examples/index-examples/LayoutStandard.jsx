import React from 'react';
import Layout from '../../lib/Layout';

import ContentExample from './ContentExample';
import MenuExample from './MenuExample';
import ToolbarExample from './ToolbarExample';

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
