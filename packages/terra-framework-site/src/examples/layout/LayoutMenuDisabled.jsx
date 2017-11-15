import React from 'react';
import Layout from 'terra-layout';

import ContentExample from './ContentExample';
import ToolbarExample from './ToolbarExample';

const layout = () => (
  <Layout
    header={<ToolbarExample />}
    style={{ height: '400px', width: '100%' }}
  >
    <ContentExample />
  </Layout>
);

export default layout;
