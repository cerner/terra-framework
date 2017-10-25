import React from 'react';
import Layout from 'terra-layout';

import ContentExample from './ContentExample';
import MenuExample from './MenuExample';
import ToolbarExample from './ToolbarExample';

const layout = () => (
  <Layout
    header={<ToolbarExample />}
    menu={<MenuExample />}
    menuText="Menu Text That Is Incredibly Long To Demonstrate Truncation"
    style={{ height: '400px', width: '100%' }}
  >
    <ContentExample />
  </Layout>
);

export default layout;
