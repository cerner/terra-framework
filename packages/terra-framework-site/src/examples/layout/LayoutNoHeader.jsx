import React from 'react';
import Layout from 'terra-layout';

import ContentExample from './ContentExample';
import MenuExample from './MenuExample';

const layout = () => (
  <Layout
    menu={<MenuExample />}
    menuText="Menu"
    style={{ height: '400px', width: '100%' }}
  >
    <ContentExample />
  </Layout>
);

export default layout;
