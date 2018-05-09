import React from 'react';
import Layout from '../../../Layout';

import ContentExample from '../common/ContentExample';
import MenuExample from '../common/MenuExample';

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
